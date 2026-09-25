export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/admin') {
      return new Response("پنل مدیریت فروشگاه", {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    return new Response("فروشگاه لوازم خانگی isgoot - سایت فعال شد", {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
