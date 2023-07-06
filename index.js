let searchBtn=document.querySelector("#search-btn");
let searchBar=document.querySelector(".search-bar-container");
let loginBtn=document.querySelector("#login-btn");
let loginConta=document.querySelector(".login-form-container");
let loginCls=document.querySelector("#form-close");
let menu=document.querySelector("#menu-bar");
let nav=document.querySelector(".navbar");
let videoBtn=document.querySelectorAll(".vid-btn");

window.onscroll=()=>{
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menu.classList.remove("fa-times");
    nav.classList.remove("active");
    loginConta.classList.remove("active");

}
menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    nav.classList.toggle("active");
})

searchBtn.addEventListener("click",()=>{
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
})
loginBtn.addEventListener("click",()=>{
    loginConta.classList.add("active");
})
loginCls.addEventListener("click",()=>{
    loginConta.classList.remove("active");
})
videoBtn.forEach(btn => {
    btn.addEventListener("click",()=>{
       let conBtn= document.querySelector(".controls .active");
conBtn.classList.remove("active");
btn.classList.add("active");
let src=btn.getAttribute("data-src");
document.querySelector("#video-slider").src=src;
console.log(src);
    });
    
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPreView:1,
        },
        768:{
            slidesPreView:1,
        },
        1024:{
            slidesPreView:1,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        450:{
            slidesPreView:2,
        },
        768:{
            slidesPreView:3,
        },
        991:{
            slidesPreView:4,
        },
        1024:{
            slidesPreView:5,
        },
    },
});

