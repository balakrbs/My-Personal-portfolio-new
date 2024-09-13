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

//Scroll to top button

const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () =>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});
 
//Navigation Menu items active on page scroll

window.addEventListener("scroll", () =>{
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id =current.getAttribute("id");

    if(scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    }
    else{
      document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    }
  });
});