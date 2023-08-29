

// timer
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
// const mseconds=document.querySelector("#mseconds");

const currentYear = new Date().getFullYear();
const newYear = new Date(`september 22 ${currentYear} 00:00:00`);

function UpdateTime() {
  const currentDate = new Date();
  const diff = newYear - currentDate;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const ms = Math.floor(diff % 1000);

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  // mseconds.innerHTML=ms<10?"0"+ms:ms;
}
setInterval(UpdateTime, 1000);



// scroll reveal
window.addEventListener('scroll', reveal)
function reveal() {
  let reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}



// function showSliding() {
//   let i;
//   let sliding = document.getElementsByClassName("myfader");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < sliding.length; i++) {
//     sliding[i].style.display = "none";
//   }
//   slidingIndex++;
//   if (slidingIndex > sliding.length) { slidingIndex = 1 }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   sliding[slidingIndex - 1].style.display = "block";
//   dots[slidingIndex - 1].className += " active";
//   setTimeout(showSliding, 3000); // Change image every 2 seconds
// }

// upper slider
function changeSlide(n) {
  slideIndex += n;
  showSlides();
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}



let sliderIndex = 1;
showSlider(sliderIndex);

// Next/previous controls
function plusSlides(n) {
  showSlider(sliderIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlider(sliderIndex = n);
}

function showSlider(n) {
  let i;
  let slider = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slider.length) {sliderIndex = 1}
  if (n < 1) {sliderIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[sliderIndex-1].style.display = "block";
  dots[sliderIndex-1].className += " active";
}



