(function ($) {
  "use strict";

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').css('top', '0px');
    } else {
      $('.sticky-top').css('top', '-100px');
    }
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
    navText : [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
      ]
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav : false,
    responsive: {
      0:{
          items:1
        },
        768:{
          items:2
        },
        992:{
          items:3
        }
      }
  });
})(jQuery);



// Open & Close Taps
const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// Back To Top Button
let span = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
}

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Dark & Light Mode
let btnTheme = document.getElementById("btnTheme");
let body = document.querySelector("body");
let h1 = document.querySelectorAll(".theme");
let vEgypt = document.getElementById("vEgypt");
let question = document.getElementById("question")

btnTheme.addEventListener("click", changeTheme);

function changeTheme() {
  if (btnTheme.textContent === "Dark Mode") {
    body.style.backgroundColor = "#252525";
    body.style.color = "#fff";
    btnTheme.textContent = "Light Mode";
    btnTheme.style.backgroundColor = "#fff";
    btnTheme.style.color = "black";
    vEgypt.style.backgroundColor = "black";
    question.style.backgroundColor = "black";
    whiteColors();
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "black";
    btnTheme.textContent = "Dark Mode";
    btnTheme.style.backgroundColor = "black";
    btnTheme.style.color = "#fff";
    vEgypt.style.backgroundColor = "#eaeaea";
    question.style.backgroundColor = "#d7d7d7";
    blackColors();
  }
}

function whiteColors () {
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = "#fff";
  }
}

function blackColors () {
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = "black";
  }
}



