# فروشگاه سید قشمی — Cloudflare Pages + Functions + D1

این پروژه یک فروشگاه RTL و موبایل‌فرندلی برای «لوازم خانگی سید قشمی» است.

## ساختار

- `index.html` — فروشگاه عمومی
- `admin.html` — پنل مدیریت در `/admin.html`
- `app.js` و `admin.js` — منطق فرانت‌اند
- `functions/api/*` — APIهای Cloudflare Pages Functions
- `migrations/0001_initial.sql` — ساخت جداول D1
- `wrangler.toml` — اتصال پروژه به D1

Cloudflare Pages Functions روی Worker اجرا می‌شوند و برای API و احراز هویت مناسب‌اند. D1 هم از طریق binding با نام `DB` در دسترس APIهاست.

## 1) نصب

Node.js نصب باشد، سپس:

```bash
npm install -g wrangler
wrangler login
```

## 2) ساخت D1

```bash
npx wrangler d1 create seyed-qeshmi-db
```

شناسه‌ای که Cloudflare برمی‌گرداند را در `wrangler.toml` به جای `PUT_YOUR_D1_DATABASE_ID_HERE` قرار بده.

## 3) ساخت دیتابیس

محلی:

```bash
npx wrangler d1 migrations apply seyed-qeshmi-db --local
```

تولید:

```bash
npx wrangler d1 migrations apply seyed-qeshmi-db --remote
```

## 4) رمز پنل

در Cloudflare Pages → Settings → Variables and Secrets دو Secret بساز:

- `ADMIN_PASSWORD`
- `SESSION_SECRET`

`SESSION_SECRET` باید یک رشته تصادفی و طولانی باشد.

برای تست محلی، `.dev.vars.example` را به `.dev.vars` تبدیل کن و مقادیر واقعی بگذار.

## 5) تست محلی

```bash
npx wrangler pages dev .
```

سپس:

- فروشگاه: `http://localhost:8788/`
- پنل: `http://localhost:8788/admin.html`

## 6) انتشار روی Cloudflare Pages

اگر پروژه را به GitHub وصل می‌کنی، Root directory همین پوشه است و Build command لازم نیست؛ چون سایت HTML است.

در تنظیمات پروژه Pages، D1 binding را با نام `DB` اضافه کن و Secrets بالا را تنظیم کن.

بعد از انتشار:

`https://YOUR-DOMAIN/admin.html`

## نکته عکس محصول

در این نسخه عکس محصول با `image_url` ذخیره می‌شود. یعنی می‌توانی URL مستقیم تصویر را در پنل وارد کنی.

اگر آپلود واقعی عکس از داخل پنل می‌خواهی، مرحله بعدی بهتر است R2 را هم اضافه کنیم تا عکس‌ها داخل Cloudflare R2 ذخیره شوند؛ D1 فقط اطلاعات محصول را نگه می‌دارد.

## اطلاعات اولیه فروشگاه

نام: سید قشمی
آیدی اینستاگرام: @seyed.qeshmii
تلفن: 09218614200
آدرس: جزیره قشم، روستای گیاهدان، جنب جاده اصلی، بغل کالای خواب، لوازم خانگی سید قشمی
