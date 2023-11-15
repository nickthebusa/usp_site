// hamburger
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinksBurger = document.querySelector('.nav-links-burger');
  const opaque = document.querySelector('#opaque');
  let menuOpen = false;

  // clicked on hamburger
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  })

  // clicked out of menu
  opaque.addEventListener('click', () => {
    if (menuOpen) {
      closeMenu();
    }
  })

  // if window gets larger than 600px
  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 600) {
      closeMenu();
    }
  })



  function openMenu() {
    menuBtn.classList.add('open');
    navLinksBurger.classList.add('open');
    opaque.style.display = 'block';
    menuOpen = true;
  }
  function closeMenu() {
    menuBtn.classList.remove('open');
    navLinksBurger.classList.remove('open');
    opaque.style.display = 'none';
    menuOpen = false;
  }
})
