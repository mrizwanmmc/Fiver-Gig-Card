const slides = document.querySelectorAll(".slide")
counter = 0;
countMaxLimit = 4; //number of slide
countMinLimit = 0; 

const slideImages = () => {
    slides.forEach (
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const goNext = () => {
    if (counter < countMaxLimit) {
          counter = counter + 1;  
    }
    slideImages()
} 

const goPrv = () => {
    if (counter > countMinLimit) {
          counter = counter - 1;  
    }
    slideImages()
} 