export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // اتصال به دیتابیس D1
    const db = env.DB;

    // روت پنل مدیریت
    if (path.startsWith('/admin')) {
      return handleAdminPanel(request, db);
    }

    // روت‌های API برای مدیریت محصولات و دسته‌ها توسط ادمین
    if (path.startsWith('/api/')) {
      return handleApi(request, db, path);
    }

    // صفحه اصلی فروشگاه (طراحی مینیمال و مدرن الهام‌گرفته از سایت‌های ارائه‌شده)
    return handleStorefront(db);
  }
};

async function handleStorefront(db) {
  // دریافت محصولات و دسته‌ها از دیتابیس
  const products = await db.prepare("SELECT * FROM products ORDER BY id DESC").all();
  const categories = await db.prepare("SELECT * FROM categories").all();

  const html = `
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>فروشگاه لوازم خانگی</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
        <style>body { font-family: 'Vazirmatn', sans-serif; }</style>
    </head>
    <body class="bg-gray-50 text-gray-900">
        <!-- هدر سایت -->
        <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <a href="/" class="text-2xl font-bold tracking-tight">HOME+</a>
                <nav class="hidden md:flex space-x-8 space-x-reverse text-sm font-medium text-gray-600">
                    <a href="/" class="hover:text-black transition">صفحه اصلی</a>
                    <a href="#products" class="hover:text-black transition">محصولات</a>
                    <a href="/admin" class="hover:text-black transition text-indigo-600">پنل مدیریت 🔐</a>
                </nav>
            </div>
        </header>

        <!-- بخش بنر اصلی -->
        <section class="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">تجخیز مدرن خانه با بهترین کیفیت</h1>
            <p class="text-gray-500 max-w-2xl mx-auto mb-8 text-lg">طراحی مینیمال، کارایی بالا و دوام طولانی برای لوازم آشپزخانه و خانه شما.</p>
        </section>

        <!-- لیست محصولات -->
        <main id="products" class="max-w-7xl mx-auto px-4 py-12">
            <h2 class="text-2xl font-bold mb-8">جدیدترین محصولات</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ${products.results.map(p => `
                    <div class="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition">
                        <div class="bg-gray-100 rounded-xl h-64 mb-4 overflow-hidden flex items-center justify-center">
                            <img src="${p.image_url \vert{}\vert{} 'https://via.placeholder.com/300'}" alt="${p.title}" class="object-cover h-full w-full">
                        </div>
                        <h3 class="font-medium text-lg mb-2">${p.title}</h3>
                        <div class="flex items-center justify-between mt-4">
                            <span class="font-bold text-lg">${p.price.toLocaleString()} تومان</span>
                            <button class="bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition">افزودن به سبد</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </main>
    </body>
    </html>
  `;
  return new Response(html, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
}

async function handleAdminPanel(request, db) {
  // پنل مدیریت ساده و مدرن برای اضافه کردن محصول و دسته‌بندی
  const html = `
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <title>پنل مدیریت فروشگاه</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
        <style>body { font-family: 'Vazirmatn', sans-serif; }</style>
    </head>
    <body class="bg-gray-100 text-gray-900 flex h-screen">
        <aside class="w-64 bg-white border-l border-gray-200 p-6 hidden md:block">
            <h1 class="text-xl font-bold mb-8">مدیریت فروشگاه</h1>
            <ul class="space-y-4 font-medium text-gray-600">
                <li><a href="/admin" class="text-black font-bold block">📦 محصولات</a></li>
                <li><a href="/" class="block hover:text-black">🌐 مشاهده سایت</a></li>
            </ul>
        </aside>
        <main class="flex-1 p-8 overflow-y-auto">
            <h2 class="text-2xl font-bold mb-6">افزودن محصول جدید</h2>
            <form id="productForm" class="bg-white p-6 rounded-2xl shadow-sm max-w-xl space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1">نام محصول</label>
                    <input type="text" id="title" required class="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-1">قیمت (تومان)</label>
                    <input type="number" id="price" required class="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                </div>
                <div>
                    <label class="block text-sm font-medium mb-1">لینک تصویر</label>
                    <input type="text" id="image_url" class="w-full border rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-black">
                </div>
                <button type="submit" class="bg-black text-white w-full py-3 rounded-xl font-medium hover:bg-gray-800 transition">ذخیره محصول</button>
            </form>
        </main>
        <script>
            document.getElementById('productForm').addEventListener('submit', async (e) => {
                e.preventDefault();
                const res = await fetch('/api/products', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: document.getElementById('title').value,
                        price: parseFloat(document.getElementById('price').value),
                        image_url: document.getElementById('image_url').value,
                        slug: 'prod-' + Date.now()
                    })
                });
                if(res.ok) { alert('محصول با موفقیت ثبت شد!'); location.reload(); }
                else { alert('خطا در ثبت محصول'); }
            });
        </script>
    </body>
    </html>
  `;
  return new Response(html, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
}

async function handleApi(request, db, path) {
  if (path === '/api/products' && request.method === 'POST') {
    try {
      const data = await request.json();
      await db.prepare(
        "INSERT INTO products (title, slug, price, image_url) VALUES (?, ?, ?, ?)"
      ).bind(data.title, data.slug, data.price, data.image_url).run();
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }
  return new Response('Not Found', { status: 404 });
    }
