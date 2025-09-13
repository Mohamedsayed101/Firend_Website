// Typed.js
var typed = new Typed("#typed", {
  strings: ["Mobile App Developer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

let proCards = [...document.querySelectorAll(".project-card")].slice(6);
let moreBtn = document.querySelector(".more-projects");

let mood = "more";

proCards.forEach((ele) => {
    ele.style.display = "none"; 
});

moreBtn.addEventListener("click", () => {
    if (mood === "more") {
        
        proCards.forEach((ele, index) => {
            setTimeout(() => {
                ele.style.display = "block";
            }, index * 500); 
        });
        mood = "showLess";
        moreBtn.innerHTML = "Show Less";
    } else {
        proCards.forEach((ele, index) => {
            setTimeout(() => {
                ele.style.display = "none";
            }, index * 500); 
        });
        mood = "more";
        moreBtn.innerHTML = "More";
    }
});


// Toggle menu on mobile
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // تغيير الأيقونة بين (bars) و (xmark)
  const icon = menuToggle.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
