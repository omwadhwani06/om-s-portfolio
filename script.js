// ========== 1. Navbar Active Highlight ==========
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ========== 2. Scroll Animations ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .skill, .project-item").forEach((el) =>
  observer.observe(el)
);


const skills = document.querySelectorAll(".skill p");
skills.forEach(skill => {
  skill.style.opacity = 0; 
});

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.classList.add("animate-skill");
    }
  });
});
skills.forEach(skill => skillObserver.observe(skill));

// ========== 4. Dark/Light Mode Toggle ==========
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "🥵";
toggleBtn.id = "theme-toggle";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


let pressed = [];
const secretCode = "omrocks";
window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    confettiEffect();
  }
});

function confettiEffect() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
