$(document).ready(function() {
    "use strict";
    initHeaderSearch();

    function initHeaderSearch() {
        if ($(".search_button").length) {
            $(".search_button").on("click", function() {
                if ($(".header_search_container").length) {
                    $(".header_search_container").toggleClass("active");
                }
            });
        }
    }
});
// Set a variable for our button element.
const scrollToTopButton = document.getElementById("js-top");

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        // ScrollTo takes an x and a y coordinate.
        // Increase the '10' value to get a smoother/slower scroll!
        window.scrollTo(0, c - c / 10);
    }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
};
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // init: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
    },
});