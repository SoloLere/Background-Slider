const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');
const limit = slides.length - 1;

let activeSlide = 0;

renderBackgroud(0);

// renders background
function renderBackgroud(pos) {
    body.style.backgroundImage = slides[pos].style.backgroundImage;
};

// change image
const changeImage = function(pos){
    slides[pos].classList.toggle('active');
    renderBackgroud(pos)
}

const goLeft = function(){
    const currentPosition = activeSlide;

    if (activeSlide === 0){
        changeImage(0);
        activeSlide = slides.length - 1;
        changeImage(activeSlide)
    }else{
        changeImage(currentPosition);
        activeSlide--;
        changeImage(activeSlide);
    }
}
const goRight = function(){
    const currentPosition = activeSlide;

    if (activeSlide === limit){
        changeImage(limit);
        activeSlide = 0;
        changeImage(activeSlide)
    }else{
        changeImage(currentPosition);
        activeSlide++;
        changeImage(activeSlide);
    }
}

left.addEventListener('click', goLeft);
right.addEventListener('click', goRight);

