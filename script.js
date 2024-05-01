'use strict'


const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');


const slides = document.querySelectorAll('.slide');


let curSlide = 0;


let maxSlide = slides.length - 1;


slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 500}px)`;
});


nextBtn.addEventListener('click', function() {

 
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${500 * (index - curSlide)}px)`;
    });
});

// previous btn functionality
prevBtn.addEventListener('click', function() {

    // check if current slide is first slide
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    // translate slide by +500px
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${500 * (index - curSlide)}px)`;
    });
});