/* =========================================
   CAF SITE JAVASCRIPT
   ========================================= */


/* -----------------------------------------
   MOBILE MENU
   ----------------------------------------- */

const menuToggle =
  document.querySelector('.menu-toggle');

const siteNav =
  document.querySelector('.site-nav');


if (menuToggle && siteNav) {

  menuToggle.addEventListener(
    'click',
    () => {

      const isOpen =
        siteNav.classList.toggle('open');


      menuToggle.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
      );

    }
  );


  siteNav
    .querySelectorAll('a')
    .forEach(link => {

      link.addEventListener(
        'click',
        () => {

          siteNav.classList.remove('open');

          menuToggle.setAttribute(
            'aria-expanded',
            'false'
          );

        }
      );

    });

}



/* -----------------------------------------
   SELECTED WORK YOUTUBE MODAL
   ----------------------------------------- */

const modal =
  document.querySelector('.video-modal');

const modalTitle =
  document.querySelector('.modal-title');

const modalIframe =
  document.querySelector('.modal-youtube');

const modalClose =
  document.querySelector('.modal-close');

const modalBackdrop =
  document.querySelector('.modal-backdrop');

const videoProjects =
  document.querySelectorAll('.video-project');



function openVideo(project) {

  if (
    !modal ||
    !modalIframe
  ) {
    return;
  }


  const videoId =
    project.dataset.video;

  const title =
    project.dataset.title || '';


  if (!videoId) {
    return;
  }


  if (modalTitle) {
    modalTitle.textContent = title;
  }


  modalIframe.src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;


  modal.classList.add('open');


  modal.setAttribute(
    'aria-hidden',
    'false'
  );


  document.body
    .classList
    .add('modal-open');

}



function closeVideo() {

  if (!modal) {
    return;
  }


  modal.classList.remove('open');


  modal.setAttribute(
    'aria-hidden',
    'true'
  );


  if (modalIframe) {

    /*
      Clearing the iframe URL
      immediately stops playback.
    */

    modalIframe.src = '';

  }


  document.body
    .classList
    .remove('modal-open');

}



videoProjects.forEach(
  project => {


    project.addEventListener(
      'click',
      () => {
        openVideo(project);
      }
    );


    project.addEventListener(
      'keydown',
      event => {

        if (
          event.key === 'Enter' ||
          event.key === ' '
        ) {

          event.preventDefault();

          openVideo(project);

        }

      }
    );


  }
);



if (modalClose) {

  modalClose.addEventListener(
    'click',
    closeVideo
  );

}



if (modalBackdrop) {

  modalBackdrop.addEventListener(
    'click',
    closeVideo
  );

}



document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === 'Escape' &&
      modal &&
      modal.classList.contains('open')
    ) {

      closeVideo();

    }

  }
);



/* -----------------------------------------
   FOOTER YEAR
   ----------------------------------------- */

const year =
  document.querySelector('#year');


if (year) {

  year.textContent =
    new Date().getFullYear();

}
