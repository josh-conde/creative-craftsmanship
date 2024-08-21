document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    const slides = document.getElementsByClassName("mySlides");

    if (slides.length > 0) {
        showSlides(slideIndex);


        window.plusSlides = function (n) {
            showSlides(slideIndex += n);
        }


        window.currentSlide = function (n) {
            showSlides(slideIndex = n);
        }


        function showSlides(n) {
            let i;
            let dots = document.getElementsByClassName("dot");

            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            if (dots.length > 0) {
                dots[slideIndex-1].className += " active";
            }
        }
    }


    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    function navToggle() {
        btn.classList.toggle('open');
        nav.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
    }

    if (btn) {
        btn.addEventListener('click', navToggle);
    }

  
    let mslideIndex = 0;

    function mshowSlides() {
        const mslides = document.querySelectorAll('#mobileSlideshow .m-slide');
        if (mslides.length > 0) {
            mslides.forEach((mslide, index) => {
                mslide.classList.remove('m-active');
                if (index === mslideIndex) {
                    mslide.classList.add('m-active');
                }
            });
            mslideIndex = (mslideIndex + 1) % mslides.length;
        }
    }

    mshowSlides();
    setInterval(mshowSlides, 3000);
});