/* === скрипт для увеличения цифр === */
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(function() {
    var isAnimatePriceInitialized = false,
        $statBlock = $('.statistics');

    function animatePrice() {
        $('[data-count-to]').each(function() {
            var $this = $(this),
                thisCountTo = +$(this).data('count-to');

            $this.animateNumber({
                number: thisCountTo
            }, {
                duration: 4000
            });
        });

        isAnimatePriceInitialized = true;
    };

    if ($statBlock.isInViewport() && !isAnimatePriceInitialized) {
        animatePrice();
    }

    $(window).on('scroll', function() {
        if ($statBlock.isInViewport() && !isAnimatePriceInitialized) {
            animatePrice();
        }
    });
});

/* === скрипт для слайдера === */
$(document).ready(function(){
   if (screen.width >= 850){
         $(document).ready(function(){
            var controls = document.querySelectorAll('.controls, #pause');
            for(var i=0; i<controls.length; i++){
                controls[i].style.display = 'inline-block';
            }

            var slides = document.querySelectorAll('.reviews-slides .slide');
            var currentSlide = 0;
            var slideInterval = setInterval(nextSlide,5000);

            function nextSlide(){
                goToSlide(currentSlide+1);
            }

            function previousSlide(){
                goToSlide(currentSlide-1);
            }

            function goToSlide(n){
                slides[currentSlide].className = 'slide';
                currentSlide = (n+slides.length)%slides.length;
                slides[currentSlide].className = 'slide showing';
            }


            var playing = true;
            var pauseButton = document.getElementById('pause');

            function pauseSlideshow(){
                pauseButton.innerHTML = '&#9658;'; // play character
                playing = false;
                clearInterval(slideInterval);
            }

            function playSlideshow(){
                pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
                playing = true;
                slideInterval = setInterval(nextSlide,2000);
            }

            pauseButton.onclick = function(){
                if(playing){ pauseSlideshow(); }
                else{ playSlideshow(); }
            };

            var next = document.getElementById('next');
            var previous = document.getElementById('previous');

            next.onclick = function(){
                pauseSlideshow();
                nextSlide();
            };
            previous.onclick = function(){
                pauseSlideshow();
                previousSlide();
            };
         });
   } else {
    $('.reviews-slides').destroySlider();
   }
});
slides();    
$(window).resize(slides);