export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/about') {
      return new Response(aboutPageHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }
    if (path === '/services') {
      return new Response(servicesPageHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }
    if (path === '/contact') {
      return new Response(contactPageHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    return new Response(indexPageHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
  }
};

const indexPageHtml = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Workup Starter - صفحه اصلی</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Vazirmatn', sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800">
    <header class="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <a href="/" class="text-2xl font-bold tracking-tight text-indigo-600">Workup</a>
            <nav class="flex space-x-6 space-x-reverse text-sm font-medium text-slate-600">
                <a href="/" class="hover:text-indigo-600 transition">صفحه اصلی</a>
                <a href="/about" class="hover:text-indigo-600 transition">درباره ما</a>
                <a href="/services" class="hover:text-indigo-600 transition">خدمات</a>
                <a href="/contact" class="hover:text-indigo-600 transition">تماس با ما</a>
            </nav>
        </div>
    </header>

    <section class="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-900">به قالب حرفه‌ای Workup خوش آمدید</h1>
        <p class="text-slate-500 max-w-2xl mx-auto mb-10 text-lg">راهکاری مدرن و شیک برای کسب‌وکار و پروژه‌های وب شما با سرعت و کیفیت بالا.</p>
        <a href="/services" class="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">مشاهده خدمات ما</a>
    </section>

    <footer class="bg-white border-t border-slate-100 py-8 text-center text-sm text-slate-400 mt-20">
        <p>تمامی حقوق محفوظ است &copy; 2026</p>
    </footer>
</body>
</html>
`;

const aboutPageHtml = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>درباره ما - Workup</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Vazirmatn', sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800">
    <header class="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <a href="/" class="text-2xl font-bold text-indigo-600">Workup</a>
            <nav class="flex space-x-6 space-x-reverse text-sm font-medium text-slate-600">
                <a href="/" class="hover:text-indigo-600 transition">صفحه اصلی</a>
                <a href="/about" class="text-indigo-600 font-bold">درباره ما</a>
                <a href="/services" class="hover:text-indigo-600 transition">خدمات</a>
                <a href="/contact" class="hover:text-indigo-600 transition">تماس با ما</a>
            </nav>
        </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-16">
        <h1 class="text-3xl font-bold mb-4">درباره ما</h1>
        <p class="text-slate-600 leading-relaxed">ما تیمی از افراد خلاق و متخصص هستیم که به ارائه بهترین راهکارهای دیجیتال و وب متعهدیم.</p>
    </main>
</body>
</html>
`;

const servicesPageHtml = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>خدمات - Workup</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Vazirmatn', sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800">
    <header class="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <a href="/" class="text-2xl font-bold text-indigo-600">Workup</a>
            <nav class="flex space-x-6 space-x-reverse text-sm font-medium text-slate-600">
                <a href="/" class="hover:text-indigo-600 transition">صفحه اصلی</a>
                <a href="/about" class="hover:text-indigo-600 transition">درباره ما</a>
                <a href="/services" class="text-indigo-600 font-bold">خدمات</a>
                <a href="/contact" class="hover:text-indigo-600 transition">تماس با ما</a>
            </nav>
        </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-16">
        <h1 class="text-3xl font-bold mb-4">خدمات ما</h1>
        <p class="text-slate-600 leading-relaxed">ارائه خدمات طراحی وب، توسعه نرم‌افزار و بهینه‌سازی فرآیندهای کسب‌وکار.</p>
    </main>
</body>
</html>
`;

const contactPageHtml = `
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>تماس با ما - Workup</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>body { font-family: 'Vazirmatn', sans-serif; }</style>
</head>
<body class="bg-slate-50 text-slate-800">
    <header class="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <a href="/" class="text-2xl font-bold text-indigo-600">Workup</a>
            <nav class="flex space-x-6 space-x-reverse text-sm font-medium text-slate-600">
                <a href="/" class="hover:text-indigo-600 transition">صفحه اصلی</a>
                <a href="/about" class="hover:text-indigo-600 transition">درباره ما</a>
                <a href="/services" class="hover:text-indigo-600 transition">خدمات</a>
                <a href="/contact" class="text-indigo-600 font-bold">تماس با ما</a>
            </nav>
        </div>
    </header>
    <main class="max-w-4xl mx-auto px-4 py-16">
        <h1 class="text-3xl font-bold mb-4">تماس با ما</h1>
        <p class="text-slate-600 leading-relaxed">شما می‌توانید از طریق ایمیل یا شبکه‌های اجتماعی با ما در ارتباط باشید.</p>
    </main>
</body>
</html>
`;
