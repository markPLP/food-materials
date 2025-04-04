window.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.main-navigation');

  navToggle.addEventListener('click', function () {
    const isHiddenNav = navLinks.style.display === 'none';

    if (isHiddenNav) {
      expandNav(navLinks);
    } else {
      collapseNav(navLinks);
    }
  });

  function expandNav(element) {
    element.style.display = 'block';
    element.style.height = '0';
    element.style.height = `${element.scrollHeight}px`;
    // use scrollHeight property to get actual height even if hidden or set to ZERO
    //const getscrollHeight = `${element.scrollHeight}px`
  }

  function collapseNav(element) {
    // const collapseHeight = element.offsetHeigt;
    // element.style.height = `${collapseHeight}px`
    // element.style.transition = 'height 0.3s';
    element.style.transition = 'all 0.3s ease-in-out';
    element.style.height = `${element.scrollHeight}px`;
    element.style.height = 0;

    setTimeout(() => {
      element.style.display = 'none';
      element.style.height = '';
    }, 300);
  }

  function windowResize() {
    navLinks.classList.add('mobile-nav');
    if (document.documentElement.clientWidth < 1025) {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
      navLinks.style.height = 'auto';
      navLinks.classList.remove('mobile-nav');
    }
  }

  windowResize();
  window.addEventListener('resize', windowResize);
});
