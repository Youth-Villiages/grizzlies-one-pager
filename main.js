const hamburger = document.getElementById("hamburger");
const menuNav = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menuNav.classList.toggle("show");
});