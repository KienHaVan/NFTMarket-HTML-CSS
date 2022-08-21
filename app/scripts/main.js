const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerToggle = $(".header-toggle");
const headerMenu = $(".header-menu");
console.log(headerToggle, headerMenu);

// header

headerToggle.addEventListener("click", () => {
    headerMenu.classList.add("is-expand");
});
window.addEventListener("click", (e) => {
    if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
        headerMenu.classList.remove("is-expand");
    }
});

// latest
$(document).ready(function () {
    $(".latest-list").slick();
});
