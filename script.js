// script.js

// 1. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 2. Fade-in Elements on Scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// 3. Button Hover Glow
document.querySelectorAll(".glow-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("hovered");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("hovered");
  });
});

// 4. Typewriter Effect for Slogan
const sloganText = "Drive to Arrive — Confidence. Precision. Presence.";
const sloganEl = document.getElementById("slogan");
let charIndex = 0;

function typeSlogan() {
  if (charIndex < sloganText.length) {
    sloganEl.textContent += sloganText.charAt(charIndex);
    charIndex++;
    setTimeout(typeSlogan, 60);
  }
}
if (sloganEl) typeSlogan();

// 5. Cursor Trail
const trail = document.createElement("div");
trail.id = "cursor-trail";
document.body.appendChild(trail);

document.addEventListener("mousemove", e => {
  trail.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;
});

// 6. Auto Welcome Voice (Optional — for Chrome/Edge)
window.addEventListener("DOMContentLoaded", () => {
  const welcome = new SpeechSynthesisUtterance(
    "Welcome to Maspala. Drive to arrive. Confidence, redefined."
  );
  welcome.rate = 0.95;
  welcome.pitch = 1;
  welcome.volume = 0.5;
  speechSynthesis.speak(welcome);
});

// 7. On Load Animation Trigger
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});