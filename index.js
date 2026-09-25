export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/admin')) {
      return new Response(`
        <!DOCTYPE html>
        <html lang="fa" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>پنل مدیریت</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-100 p-8 font-sans">
            <h1 class="text-2xl font-bold mb-4">پنل مدیریت فروشگاه</h1>
            <p class="mb-4">دیتابیس متصل است. برای بازگشت به سایت اصلی <a href="/" class="text-blue-600 underline">اینجا کلیک کنید</a>.</p>
        </body>
        </html>
      `, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    }

    return new Response(`
      <!DOCTYPE html>
      <html lang="fa" dir="rtl">
      <head>
          <meta charset="UTF-8">
          <title>فروشگاه لوازم خانگی</title>
          <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-50 text-gray-900 font-sans text-center py-20">
          <h1 class="text-4xl font-bold mb-4">فروشگاه لوازم خانگی isgoot</h1>
          <p class="text-gray-600 mb-6">سایت با موفقیت روی دامنه شما بالا آمد!</p>
          <a href="/admin" class="bg-black text-white px-6 py-3 rounded-xl font-medium">ورود به پنل مدیریت 🔐</a>
      </body>
      </html>
    `, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
  }
};
