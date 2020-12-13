window.addEventListener("scroll", function(){
    var header = document.querySelector('header');
    header.classList.toggle('light', window.scrollY > 0);
});

function toggleMenu() {
    var toogle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    toogle.classList.toggle('active');
    menu.classList.toggle('active');
}