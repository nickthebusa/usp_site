let homeSlideImageNumber = 0;
let homeSlideLength = 0;
let slideImagesList = [];
let popUpSlideOpen = false;

document.addEventListener("DOMContentLoaded", function () {

  // home slideshow
  const backBtn = document.querySelector('.back-slideshow-btn');
  const forwardBtn = document.querySelector('.forward-slideshow-btn');
  const slideshowImg = document.querySelector('.slideshow-img');

  // id of slideshow interval
  let slideInterval;
  // id of timeout for slide pause
  let slidePause;

  backBtn.addEventListener('click', () => {
    if (homeSlideImageNumber === 0) {
      homeSlideImageNumber = homeSlideLength - 1;
    } else {
      homeSlideImageNumber = homeSlideImageNumber - 1;
    }
    updateSlideshow();
    clearInterval(slideInterval);
    if (slidePause) {
      clearTimeout(slidePause);
    }
    slidePause = setOffSlide();
  })
  forwardBtn.addEventListener('click', () => {
    if (homeSlideImageNumber === homeSlideLength - 1) {
      homeSlideImageNumber = 0;
    } else {
      homeSlideImageNumber++;
    }
    updateSlideshow();
    clearInterval(slideInterval);
    if (slidePause) {
      clearTimeout(slidePause);
    }
    slidePause = setOffSlide();
  })

  async function slideshowStart() {
    slideImagesList = await getImagesList();
    if (slideImagesList.length > 0) {
      slideImagesList = shuffleArray(slideImagesList);
    }

    if (slideImagesList) {
      homeSlideLength = slideImagesList.length;
      slideshowImg.src = slideImagesList[homeSlideImageNumber].src;
      slideInterval = setAutoSlide();
    }
  }

  function updateSlideshow() {
    if (slideImagesList.length > 0) {
      slideshowImg.src = slideImagesList[homeSlideImageNumber].src;
    }
  }

  function setAutoSlide() {
    slideInterval = setInterval(() => {
    if (homeSlideImageNumber === homeSlideLength - 1) {
      homeSlideImageNumber = 0;
    } else {
      homeSlideImageNumber++;
    }
      updateSlideshow();
    }, 5000)
    return slideInterval;
  }

  function setOffSlide() {
    const timeout = setTimeout(() => {
      setAutoSlide();
    }, 10000)
    return timeout;
  }


  /* --gets slideshow images and then sets interval-- */
  slideshowStart();
})


// FUNCTIONS

async function getImagesList() {
  const imagesList = await fetchImages();
  return imagesList;
}

async function fetchImages() {
  const res = await fetch('/image-list');
  const data = await res.json();
  return data;
}

function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;
  
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
