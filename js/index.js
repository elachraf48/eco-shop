const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });







const nxtBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slidez");
const numberOfSlides = slides.length;
let slideNumber= 0;



let buttonClicked = false; // Flag to track if the button was clicked

// Function to show the next slide
const showNextSlide = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
};

// Set an interval to automatically move to the next slide every 3 seconds
const autoAdvanceInterval = setInterval(showNextSlide, 3000);

// Slider next button click event
nxtBtn.onclick = () => {
    // You can add additional logic here if needed
};

// If you want to stop auto-advancing when the button is clicked
// you can clear the interval
nxtBtn.onclick = () => {
    clearInterval(autoAdvanceInterval);
};
// slider Prev button
prvBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0 ){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}

// JavaScript function for handling the button click
function contactUs() {
  // Add your logic for what should happen on button click
  alert("Contactez-nous!"); // Example: Display an alert
}

// Language messages
var messages = ['اتصل بنا', 'Contact Us', 'Contactez-Nous', 'Contáctenos', 'Kontaktieren Sie uns'];
var currentMessageIndex = 0;

// Helper function to set text content with flash effect
function setLanguageText() {
  var contactUsButton = document.getElementById('contactUsButton');
  contactUsButton.textContent = messages[currentMessageIndex];
  contactUsButton.classList.add('flash-animation');
  setTimeout(function () {
      contactUsButton.classList.remove('flash-animation');
  }, 1000);

  // Cycle to the next message
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

// Initial call to set the first message
setLanguageText();

// Automatically change the message after each flash
setInterval(setLanguageText, 2000); // Change message every 2 seconds (adjust as needed)



