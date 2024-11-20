const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//var a = document.querySelector("#elem1")
//var image = a.getAttribute("data-image")
//console.log(image)

function page5Animation(){
    var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector(".fixed-image");

elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block"; 
});

elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
    });
})
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100, 
      });  
}

swiperAnimation()
page5Animation()
