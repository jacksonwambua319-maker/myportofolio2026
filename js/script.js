const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      section.classList.add('show');
    }
  });
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("theme-toggle").onclick = function(){
  document.body.classList.toggle("dark");
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});



const progresses = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.85;

  if(sectionTop < trigger){
    progresses.forEach(bar => {
      bar.style.width = bar.getAttribute("data-width");
    });
  }
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
