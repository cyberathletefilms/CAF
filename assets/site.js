const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

const modal = document.querySelector("[data-modal]");
const modalFrame = document.querySelector("[data-modal-frame]");
const modalTitle = document.querySelector("[data-modal-title]");

const modalCloseButtons = document.querySelectorAll(
  "[data-modal-close]"
);

const videoTriggers = document.querySelectorAll(
  ".video-trigger"
);


/* =========================================================
   COPYRIGHT YEAR
========================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("is-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* =========================================================
   VIDEO MODAL
========================================================= */

function openVideo(videoId, title) {

  if (!modal || !modalFrame || !modalTitle) {
    return;
  }

  modalFrame.src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  modalTitle.textContent =
    title || "Cyber Athlete Films";

  modal.classList.add("is-open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add("modal-open");

}


function closeVideo() {

  if (!modal || !modalFrame) {
    return;
  }

  modal.classList.remove("is-open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  modalFrame.src = "";

  document.body.classList.remove("modal-open");

}


videoTriggers.forEach((trigger) => {

  trigger.addEventListener("click", () => {

    openVideo(
      trigger.dataset.video,
      trigger.dataset.title
    );

  });

});


modalCloseButtons.forEach((button) => {

  button.addEventListener(
    "click",
    closeVideo
  );

});


document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    modal?.classList.contains("is-open")
  ) {
    closeVideo();
  }

});
/* =========================================================
   CONTACT FORM — AJAX SUBMISSION
========================================================= */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {

  contactForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );

    const formData = new FormData(contactForm);

    const formPayload = Object.fromEntries(
      formData.entries()
    );

    submitButton.disabled = true;
    formStatus.textContent = "Sending...";

    try {

      const response = await fetch(
        contactForm.action,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },

          body: JSON.stringify(formPayload)
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "The message could not be sent."
        );
      }

      formStatus.textContent =
        "Thank you. Your message has been sent.";

      contactForm.reset();

    } catch (error) {

      console.error(error);

      formStatus.textContent =
        "Something went wrong. Please email eddie@cyberathletefilms.com.";

    } finally {

      submitButton.disabled = false;

    }

  });

}
