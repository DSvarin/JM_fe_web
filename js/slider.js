const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 26,
            pagination: {
                el: '.swiper-pagination',

                dynamicBullets: true,
                dynamicMainBullets: 9,
            }
        });
        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth >= 768) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', function() {
    mobileSlider();
    showMoreLess();
});

let slides = document.querySelectorAll('.swiper-slide');

function showLess() {
    if (window.innerWidth >= 768 && window.innerWidth < 1016) {
        for ( i = 6; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    } else if (window.innerWidth >= 1016) {
        for ( i = 8; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
    }
}

function showMore() {
    if (window.innerWidth >= 768 && window.innerWidth < 1016) {
        for ( i = 6; i < slides.length; i++) {
            slides[i].style.display = 'block';
        }
    } else if (window.innerWidth >= 1016) {
        for ( i = 8; i < slides.length; i++) {
            slides[i].style.display = 'block';
        }
    }
}

let more = document.querySelector('.button-more');
let less = document.querySelector('.button-less');


let showMoreLess = function() {
        more.addEventListener('click', function(evt) {
            evt.preventDefault();

            showMore();
            more.style.display = 'none';
            less.style.display = 'block';

        })

        less.addEventListener('click', function(evt) {
            evt.preventDefault();

            showLess();
            more.style.display = 'block';
            less.style.display = 'none';
        })

}

showMoreLess();





