<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>سید قشمی | لوازم خانگی قشم</title>

<meta name="description"
content="سید قشمی | فروش حضوری و آنلاین لوازم خانگی در جزیره قشم">

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Tahoma,Arial,sans-serif;
    background:#f5f7fb;
    color:#111827;
    line-height:2;
}

a{
    text-decoration:none;
}

.container{
    width:92%;
    max-width:1150px;
    margin:auto;
}

/* HEADER */

header{
    background:linear-gradient(135deg,#07111f,#164e9e);
    color:white;
    padding:20px 0 70px;
}

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo-text{
    font-size:25px;
    font-weight:bold;
}

nav ul{
    list-style:none;
    display:flex;
    gap:25px;
}

nav ul li a{
    color:white;
}

/* HERO */

.hero{
    display:grid;
    grid-template-columns:1.3fr .7fr;
    gap:40px;
    align-items:center;
    margin-top:60px;
}

.hero h1{
    font-size:45px;
    margin-bottom:15px;
}

.hero p{
    color:#dbeafe;
    font-size:18px;
}

.badge{
    display:inline-block;
    background:#dbeafe;
    color:#1d4ed8;
    padding:4px 15px;
    border-radius:30px;
    margin-bottom:15px;
}

.buttons{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    margin-top:25px;
}

.btn{
    padding:11px 22px;
    border-radius:12px;
    font-weight:bold;
    display:inline-block;
}

.btn-call{
    background:white;
    color:#1451a5;
}

.btn-whatsapp{
    background:#16a34a;
    color:white;
}

.btn-instagram{
    border:1px solid white;
    color:white;
}

/* PROFILE */

.profile{
    background:white;
    color:#111827;
    border-radius:25px;
    padding:25px;
    text-align:center;
    box-shadow:0 20px 50px #0004;
}

.profile-logo{
    width:125px;
    height:125px;
    margin:auto;
    border-radius:50%;
    background:#eaf4ff;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:60px;
}

.profile h2{
    margin-top:10px;
}

.username{
    color:#64748b;
    direction:ltr;
}

.stats{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:8px;
    margin-top:20px;
}

.stat{
    background:#f1f5f9;
    border-radius:12px;
    padding:8px;
}

.stat strong{
    display:block;
    font-size:20px;
}

.stat span{
    font-size:12px;
    color:#64748b;
}

/* SECTION */

section{
    padding:65px 0;
}

.title{
    text-align:center;
    margin-bottom:35px;
}

.title h2{
    font-size:30px;
}

.title p{
    color:#64748b;
}

/* INFO */

.info{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}

.info-box{
    background:white;
    padding:25px;
    border-radius:18px;
    border:1px solid #e5e7eb;
}

.info-box .icon{
    font-size:35px;
}

.info-box h3{
    margin:8px 0;
}

.info-box p{
    color:#64748b;
    font-size:14px;
}

/* CATEGORIES */

#categories{
    background:white;
}

.categories{
    display:flex;
    justify-content:center;
    gap:10px;
    flex-wrap:wrap;
    margin-bottom:30px;
}

.category{
    border:1px solid #ddd;
    background:white;
    padding:10px 18px;
    border-radius:30px;
    cursor:pointer;
    font-family:inherit;
}

.category:hover,
.category.active{
    background:#1261d8;
    color:white;
}

/* PRODUCTS */

.products{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:20px;
}

.product{
    background:white;
    border:1px solid #e5e7eb;
    border-radius:18px;
    overflow:hidden;
    transition:.2s;
}

.product:hover{
    transform:translateY(-5px);
    box-shadow:0 15px 30px #0001;
}

.product-image{
    height:190px;
    background:linear-gradient(135deg,#e0f2fe,#f8fafc);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:70px;
}

.product-content{
    padding:17px;
}

.product-content h3{
    font-size:17px;
}

.product-content p{
    color:#64748b;
    font-size:13px;
    margin:5px 0 12px;
}

.product-btn{
    display:block;
    background:#eff6ff;
    color:#1451a5;
    text-align:center;
    padding:8px;
    border-radius:10px;
    font-weight:bold;
}

/* CONTACT */

.contact{
    background:#0f172a;
    color:white;
}

.contact-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:30px;
}

.contact h2{
    font-size:30px;
}

.contact p{
    color:#cbd5e1;
}

.contact-item{
    background:#1e293b;
    padding:15px;
    border-radius:12px;
    margin-top:12px;
}

.contact-item span{
    display:block;
    color:#94a3b8;
    font-size:13px;
}

.contact-item a{
    color:white;
    font-weight:bold;
}

/* FOOTER */

footer{
    background:#020617;
    color:#94a3b8;
    text-align:center;
    padding:25px;
    font-size:13px;
}

/* FLOATING BUTTONS */

.floating{
    position:fixed;
    left:18px;
    bottom:18px;
    display:flex;
    flex-direction:column;
    gap:10px;
    z-index:100;
}

.float{
    width:52px;
    height:52px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-size:23px;
    box-shadow:0 8px 20px #0004;
}

.float-call{
    background:#2563eb;
}

.float-whatsapp{
    background:#16a34a;
}

/* MOBILE */

@media(max-width:850px){

    nav ul{
        display:none;
    }

    .hero{
        grid-template-columns:1fr;
    }

    .hero h1{
        font-size:33px;
    }

    .info{
        grid-template-columns:1fr;
    }

    .products{
        grid-template-columns:repeat(2,1fr);
    }

    .contact-grid{
        grid-template-columns:1fr;
    }
}

@media(max-width:500px){

    .products{
        grid-template-columns:1fr;
    }

    .hero{
        margin-top:40px;
    }

    .buttons{
        flex-direction:column;
    }

    .btn{
        text-align:center;
    }
}
</style>
</head>

<body>


<!-- HEADER -->

<header>

<div class="container">

<nav>

<div class="logo-text">
سید قشمی
</div>

<ul>
<li><a href="#home">خانه</a></li>
<li><a href="#categories">دسته‌بندی</a></li>
<li><a href="#products">محصولات</a></li>
<li><a href="#contact">تماس با ما</a></li>
</ul>

</nav>


<!-- HERO -->

<div class="hero" id="home">

<div>

<span class="badge">
لوازم خانگی | فروش حضوری و آنلاین
</span>

<h1>
لوازم خانگی سید قشمی
</h1>

<p>
فروش حضوری و آنلاین لوازم خانگی
در جزیره قشم
</p>

<div class="buttons">

<a class="btn btn-call"
href="tel:09218614200">
📞 تماس با ما
</a>

<a class="btn btn-whatsapp"
href="https://wa.me/989218614200"
target="_blank">
💬 واتساپ
</a>

<a class="btn btn-instagram"
href="https://www.instagram.com/seyed.qeshmii/"
target="_blank">
📷 اینستاگرام
</a>

</div>

</div>


<!-- PROFILE -->

<div class="profile">

<div class="profile-logo">
🏠
</div>

<h2>
سید قشمی
</h2>

<div class="username">
@seyed.qeshmii
</div>

<div class="stats">

<div class="stat">
<strong>69</strong>
<span>پست</span>
</div>

<div class="stat">
<strong>17K</strong>
<span>دنبال‌کننده</span>
</div>

<div class="stat">
<strong>126</strong>
<span>دنبال‌شونده</span>
</div>

</div>

</div>

</div>

</div>

</header>



<!-- ABOUT -->

<section>

<div class="container">

<div class="title">

<h2>
درباره فروشگاه
</h2>

<p>
اطلاعات فروشگاه سید قشمی
</p>

</div>


<div class="info">


<div class="info-box">

<div class="icon">
🏪
</div>

<h3>
فروش حضوری و آنلاین
</h3>

<p>
لوازم خانگی سید قشمی،
فروش حضوری و آنلاین در جزیره قشم.
</p>

</div>


<div class="info-box">

<div class="icon">
📍
</div>

<h3>
آدرس فروشگاه
</h3>

<p>
جزیره قشم، روستای گیاهدان،
جنب جاده اصلی،
بغل کالای خواب،
لوازم خانگی سید قشمی
</p>

</div>


<div class="info-box">

<div class="icon">
📞
</div>

<h3>
شماره تماس
</h3>

<p>

<a href="tel:09218614200">

09218614200

</a>

</p>

</div>


</div>

</div>

</section>



<!-- CATEGORIES -->

<section id="categories">

<div class="container">

<div class="title">

<h2>
دسته‌بندی محصولات
</h2>

<p>
محصولات موردنظر خود را انتخاب کنید
</p>

</div>


<div class="categories">

<button class="category active"
data-filter="all">
همه
</button>

<button class="category"
data-filter="kitchen">
لوازم آشپزخانه
</button>

<button class="category"
data-filter="beauty">
لوازم شخصی و زیبایی
</button>

<button class="category"
data-filter="electric">
لوازم برقی
</button>

<button class="category"
data-filter="other">
سایر محصولات
</button>

</div>



<!-- PRODUCTS -->

<div class="products" id="products">


<div class="product"
data-category="kitchen">

<div class="product-image">
☕
</div>

<div class="product-content">

<h3>
لوازم آشپزخانه
</h3>

<p>
انواع لوازم و وسایل کاربردی آشپزخانه
</p>

<a class="product-btn"
href="tel:09218614200">
استعلام قیمت
</a>

</div>

</div>



<div class="product"
data-category="beauty">

<div class="product-image">
💇
</div>

<div class="product-content">

<h3>
لوازم شخصی و زیبایی
</h3>

<p>
محصولات کاربردی شخصی و زیبایی
</p>

<a class="product-btn"
href="tel:09218614200">
استعلام قیمت
</a>

</div>

</div>



<div class="product"
data-category="electric">

<div class="product-image">
⚡
</div>

<div class="product-content">

<h3>
لوازم برقی
</h3>

<p>
انواع لوازم برقی و وسایل خانگی
</p>

<a class="product-btn"
href="tel:09218614200">
استعلام قیمت
</a>

</div>

</div>



<div class="product"
data-category="other">

<div class="product-image">
🏠
</div>

<div class="product-content">

<h3>
سایر محصولات
</h3>

<p>
برای مشاهده موجودی با ما تماس بگیرید.
</p>

<a class="product-btn"
href="tel:09218614200">
استعلام قیمت
</a>

</div>

</div>


</div>

</div>

</section>



<!-- CONTACT -->

<section class="contact"
id="contact">

<div class="container">

<div class="contact-grid">


<div>

<h2>
ارتباط با سید قشمی
</h2>

<p>
برای استعلام قیمت، موجودی محصولات
و سفارش با ما تماس بگیرید.
</p>


<div class="contact-item">

<span>
شماره تماس و واتساپ
</span>

<a href="tel:09218614200">
09218614200
</a>

</div>


<div class="contact-item">

<span>
اینستاگرام
</span>

<a href="https://www.instagram.com/seyed.qeshmii/"
target="_blank">

@seyed.qeshmii

</a>

</div>


<div class="contact-item">

<span>
آدرس
</span>

جزیره قشم، روستای گیاهدان،
جنب جاده اصلی، بغل کالای خواب

</div>

</div>


<div style="
display:flex;
align-items:center;
justify-content:center;
font-size:100px;
">

🏠

</div>


</div>

</div>

</section>



<!-- FOOTER -->

<footer>

© 2026 سید قشمی | لوازم خانگی قشم

</footer>



<!-- FLOATING BUTTONS -->

<div class="floating">

<a class="float float-call"
href="tel:09218614200">
☎
</a>

<a class="float float-whatsapp"
href="https://wa.me/989218614200"
target="_blank">
💬
</a>

</div>



<!-- JAVASCRIPT -->

<script>

const buttons =
document.querySelectorAll(".category");

const products =
document.querySelectorAll(".product");


buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn =>
btn.classList.remove("active")
);

button.classList.add("active");

const filter =
button.getAttribute("data-filter");


products.forEach(product => {

if(
filter === "all" ||
product.getAttribute("data-category") === filter
){

product.style.display = "";

}else{

product.style.display = "none";

}

});

});

});

</script>


</body>
</html>
