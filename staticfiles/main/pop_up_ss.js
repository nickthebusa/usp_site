{/* <div class="pop-up-slideshow">

  <button class="pop-up-x">
    <i class="fa-solid fa-x" id='x-out'></i>
  </button>

  <button class='pop-up-btn-back'>
    <i class="fa-solid fa-arrow-left"></i>
  </button>


    <img class="pop-up-ss-img" src="" alt="pop-up-slideshow-pic">

  <button class='pop-up-btn-forward'>
    <i class="fa-solid fa-arrow-right"></i>
  </button>

</div> */}


// pop up slideshow
const popUpSS = document.querySelector('.pop-up-slideshow');
const popUpSsImg = document.querySelector('.pop-up-ss-img');

slideshowImg.addEventListener('click', () => {
  clearInterval(slideInterval);
  popUpSS.style.display = 'block';
  document.getElementById("opaque").style.display = 'block';
  popUpSsImg.src = slideshowImg.src;
  popUpSlideOpen = true;
})


document.addEventListener('click', (e) => {
  if ((e.target.id === 'x-out' || e.target.id === 'opaque')
  && popUpSlideOpen) {
    popUpSS.style.display = 'none';
    document.getElementById("opaque").style.display = 'none';
    slideInterval = setAutoSlide();
    popUpSlideOpen = false;
  }
})

// /* ------------POP-UP SLIDESHOW-------- */
// .pop-up-slideshow {
//   display: none;
//   position: fixed;
//   text-align: center;
//   margin-top: 40px;
//   top: 0;
//   left: 50%;
//   transform: translate(-50%);
//   z-index: 101;
//   width: 80%;
// }
// .pop-up-slideshow button {
//   background: none;
//   border: none;
// }
// .pop-up-x {
//   position: absolute;
//   top: -20px;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 1.3rem;
//   margin: 0;
//   color: var(--white);
// }
// .pop-up-slideshow button:hover {
//   cursor: pointer;
//   font-size: larger;
// }
// .pop-up-btn-forward, .pop-up-btn-back {
//   position: absolute;
//   top: 0;
//   font-size: 1.3rem;
//   margin: 0;
//   border: 1px solid red;
//   height: 100%;
//   color: rgba(109, 109, 109, 0.288);
// }
// .pop-up-btn-forward:hover, .pop-up-btn-back:hover {
//   background-color: rgba(41, 141, 255, 0.342);
// }
// .pop-up-btn-forward {
//   right: 0;
// }
// .pop-up-ss-img {
//   height: auto;
//   width: 100%;
//   border-radius: 5px;
// }
// /* .pop-up-ss-img:hover {
//   cursor: zoom-out;
// } */

// @media (min-height: 510px) and (max-width: 500px) {
//   .pop-up-slideshow {
//     top: 50%;
//     transform: translate(-50%, -50%);
//   }
// }