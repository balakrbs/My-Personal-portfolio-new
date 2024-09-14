// Navigation bar effects on scroll

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Services Section - Model
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

//Portfolio Section - Model

const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModel = function (modalClick) {
  portfolioModels[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModel(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModels.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

//Website Dark/Light theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation Menu items active on page scroll

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

//Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

//contact Email Message

function sendMail(event) {
  event.preventDefault(); // Prevent default form submission

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_toz1f4h", "template_cjerzap", params)
    .then(() => {
      alert("Email Sent!!");
      location.reload(); // Reset the form fields

      // Optional: Reload the page if you want full refresh
      // location.reload();
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
}
//scroll reveal animations
//common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

//Target elements, and specify options to create reveal animations

ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info h3, .home .info p, .theme-btn", {
  delay: 600,
  origin: "right",
  easing: "ease-in-out",
  distance: "10px",
  interval: 200,
});

ScrollReveal().reveal(".home .info .btn, .about-info .btn", {
  delay: 700,
  origin: "bottom",
  interval: 300,
});

ScrollReveal().reveal(".media-icons i, .contact-left li ", {
  delay: 500,
  origin: "left",
  interval: 200,
});

ScrollReveal().reveal(".home-img, .about-img", {
  delay: 500,
  origin: "bottom",
});

ScrollReveal().reveal(".about .description, .copy-right", {
  delay: 600,
  easing: "ease-in-out",
  distance: "10px",
  origin: "right",
});

ScrollReveal().reveal(
  ".about .professional-list li, .about .professional-list",
  {
    delay: 500,
    origin: "right",
    easing: "ease-in-out",
    distance: "10px",
    interval: 200,
  }
);

ScrollReveal().reveal(
  ".skills-description, .services-description, .contact-left h2",
  {
    delay: 700,
    easing: "ease-in-out",
    distance: "10px",
    origin: "right",
  }
);

ScrollReveal().reveal(".contact-right p, input, textarea", {
  delay: 700,
  origin: "right",
  easing: "ease-in-out",
  distance: "10px",
  interval: 200,
});
ScrollReveal().reveal(".contact-right p", {
  delay: 700,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(
  ".service-card, .education, .protfolio, .img-card, .contact-form .btn, .contact-card",
  {
    delay: 800,
    origin: "bottom",
    interval: 200,
  }
);

ScrollReveal().reveal(
  "footer .group, .follow-group, .footer-copyright, .scroll-down, .experience-card",
  {
    delay: 900,
    origin: "top",
    interval: 200,
  }
);
