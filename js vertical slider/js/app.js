const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slider');
const slideLeft = document.querySelector('.left-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideLeft.querySelectorAll('div').length;

let activeSlideIndex = 0;
let slideEffect = 0;
slideLeft.style.top = `-${(slidesLength -1) * 100}%`;

upButton.addEventListener('click' , ()=> changeSlide('up'));
downButton.addEventListener('click' , ()=> changeSlide('down'));
const changeSlide = (direction) => {
    //traversy method ----------------------------
    // const sliderHeight = sliderContainer.clientHeight;
    // if(direction === 'up'){
    //     activeSlideIndex++;
    //     if(activeSlideIndex > slidesLength -1){
    //         activeSlideIndex =  0;
    //     }
    // }else if(direction === 'down'){
    //     activeSlideIndex--;
    //     if(activeSlideIndex< 0){
    //         activeSlideIndex = slidesLength -1;
    //     }
    // }
    // slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    // slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;


    // my method--------------------------------

    if(direction === 'up'){
        if(slideEffect === 300){
            slideEffect = -100;
        }
        slideEffect+=100;
        slideRight.style.transform = `translateY(-${slideEffect }%)`;
        slideLeft.style.transform = `translateY(${slideEffect }%)`;
    }
    else if(direction === 'down'){
        if(slideEffect === 0){
            slideEffect = 400;
        }
        slideEffect-=100;
        slideRight.style.transform = `translateY(-${slideEffect}%)`;
        slideLeft.style.transform = `translateY(${slideEffect}%)`;
    }
}