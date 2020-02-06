$('.owl-hero-1').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    responsiveClass: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        678: {
            items: 2,
            dots: false
        },
        1200: {
            items: 3
        }
    }

})

$('.owl-hero-2').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    merge: true,
    responsiveClass: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        678: {
            items: 2,
            dots: false,
            mergeFit: true
        },
        1200: {
            items: 3,
            mergeFit: true
        }
    }
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (this.window.pageYOffset > 232) {


        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-232px";
        }
        prevScrollpos = currentScrollPos;
    }
}