mainImg = document.getElementById('mainImg');

thumb01 = document.getElementById('thumb01')
thumb01Src = document.getElementById('thumb01').src

thumb02 = document.getElementById('thumb02')
thumb02Src = document.getElementById('thumb02').src

thumb03 = document.getElementById('thumb03')
thumb03Src = document.getElementById('thumb03').src

thumb04 = document.getElementById('thumb04')
thumb04Src = document.getElementById('thumb04').src


thumb01.addEventListener ("click", function(){
    mainImg.src = thumb01Src;
})

thumb02.addEventListener ("click", function(){
    mainImg.src = thumb02Src
})

thumb03.addEventListener ("click", function(){
    mainImg.src = thumb03Src
})

thumb04.addEventListener ("click", function(){
    mainImg.src = thumb04Src
})


const slides = document.querySelectorAll('[data-js="carousel-item"]')
const nextButton = document.querySelector('[data-js="carousel-btn-next"]')
const prevButton = document.querySelector('[data-js="carousel-btn-prev"]')

let currentSlideIndex = 0

nextButton.addEventListener('click', () => {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0
    } else {
        currentSlideIndex++
    }

    slides.forEach(slide => {
        slide.classList.remove('carousel-item-visible')
    })

    slides[currentSlideIndex].classList.add('carousel-item-visible')
})

prevButton.addEventListener('click', () => {
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1 /*Último slide*/
    } else {
        currentSlideIndex--
    }

    slides.forEach(slide => {
        slide.classList.remove('carousel-item-visible')
    })

    slides[currentSlideIndex].classList.add('carousel-item-visible')
})