const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const headerToggle = $(".header-toggle");
const headerMenu = $(".header-menu");
const $jq = jQuery.noConflict();

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
// $(document).ready(() => {

// });
$jq(".latest-list").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    arrows: true,
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                centerMode: true,
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                centerMode: false,
                slidesToShow: 1,
            },
        },
    ],
});
// HOTTEST LEFT
$jq(".hottest-left-list").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    centerPadding: "60px",
    prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                centerMode: true,
                slidesToShow: 2,
                arrows: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                arrows: true,
            },
        },
    ],
});

// POPULAR
// $jq(".popular-content").slick({
//     infinite: true,
//     centerMode: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: true,
// });
