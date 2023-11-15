window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav");

    if (window.scrollY > 200) {
        navbar.classList.add("nav-hidden");
    } else {
        navbar.classList.remove("nav-hidden");
    }
});
let menupcbtn = document.getElementById("menu-pc-btn");
let menupc = document.querySelector(".menu-pc");
let isshow = false;

menupc.classList.add("hidden");

menupcbtn.addEventListener("click", function () {
    if (isshow) {
        menupc.classList.add("hidden");
    } else {
        menupc.classList.remove("hidden");
    }

    isshow = !isshow;
    window.addEventListener("scroll", function () {
        if (isshow) {
            menupc.classList.add("hidden");
        }
    });
});

let menupcclo = document.getElementById("menu-pc-clo");

menupcclo.addEventListener("click", function () {
    menupc.classList.add("hidden");
    isshow = false;
});

