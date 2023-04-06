const btnPreviousEl = document.querySelector(".btn-previous")
const btnNextEl = document.querySelector(".btn-next");
const imageContainerEl = document.querySelector(".image-container");
const numb = imageContainerEl.childElementCount;
let currentImg = 1;

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
}

function previosImage() {
    currentImg--;
    checkCurrentImg();
    updateImage();
}

function updateImage() {
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * (500)}px)`;
};



btnNextEl.addEventListener("click", nextImage);
btnPreviousEl.addEventListener("click", previosImage);