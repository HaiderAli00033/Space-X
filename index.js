window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav");

    if (window.scrollY > 100) {
        navbar.classList.add("nav-hidden");
    } else {
        navbar.classList.remove("nav-hidden");
    }
});