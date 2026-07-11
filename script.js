/*=========================
      LOADER
=========================*/

window.addEventListener("load",function(){

    setTimeout(function(){

        document.getElementById("loader").style.opacity="0";

        setTimeout(function(){

            document.getElementById("loader").style.display="none";

        },800);

    },1500);

});
const words = [
  "Aspiring Data Analyst",
  "Power BI Enthusiast",
  "SQL | Python | Excel",
  "Data Visualization"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typing.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ==========================
   ACTIVE NAVBAR LINK
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(scrollY>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});
/* ==========================
   MESSAGE CHARACTER COUNTER
========================== */

const messageBox = document.querySelector("textarea");
const charCount = document.getElementById("charCount");

messageBox.addEventListener("input", () => {

    const length = messageBox.value.length;

    charCount.textContent = `${length} / 500`;

    if(length >= 450){
        charCount.style.color = "#FBBF24";
    } else {
        charCount.style.color = "#9CA3AF";
    }

});