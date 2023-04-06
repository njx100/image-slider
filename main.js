const btnPreviousEl = document.querySelector(".btn-previous")
const btnNextEl = document.querySelector(".btn-next");
const imageContainerEl = document.querySelector(".image-container");
const numb = imageContainerEl.childElementCount;
let currentImg = 1;
let timer;

function checkCurrentImg() {
    if (currentImg < 1) {
        currentImg = numb;
    } else if (currentImg > numb) {
        currentImg = 1;
    }
};

function nextImage() {
    currentImg++;
    checkCurrentImg();
    updateImage();
    clearTimeout(timer);
    autoSlider();
}

function previosImage() {
    currentImg--;
    checkCurrentImg();
    updateImage();
    clearTimeout(timer);
    autoSlider();
}

function updateImage() {
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * (500)}px)`;
};

btnNextEl.addEventListener("click", nextImage);
btnPreviousEl.addEventListener("click", previosImage);

function autoSlider() {timer = setTimeout(() => {
   nextImage();
}, 3000);
};

autoSlider();