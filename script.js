// Smooth scrolling (for anchor links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
});

// Fade-in elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Ripple effect on buttons
document.querySelectorAll('button, .btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  });
});

// === PORTAL-STYLE TRANSITIONS ON PAGE LOAD ===
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("portal-enter");
  setTimeout(() => {
    document.body.classList.remove("portal-enter");
  }, 1000);
});

// === FADE-IN ON SCROLL FOR SECTIONS ===
const revealOnScroll = () => {
  const reveals = document.querySelectorAll("section, .reveal");

  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("fade-in");
    }
  }
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger on load

// === GLOW ON HOVER EFFECT FOR BUTTONS ===
const glowButtons = document.querySelectorAll("button, .glow-on-hover");
glowButtons.forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  });
});

// === RIPPLE EFFECT ON CLICK ===
document.addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// === 3D INTERACTIVE ICON FLOAT EFFECT ===
const floatingIcons = document.querySelectorAll(".floating-icon");

document.addEventListener("mousemove", e => {
  floatingIcons.forEach(icon => {
    const speed = icon.getAttribute("data-speed") || 2;
    const x = (window.innerWidth / 2 - e.pageX) / 100 * speed;
    const y = (window.innerHeight / 2 - e.pageY) / 100 * speed;
    icon.style.transform = `translate(${x}px, ${y}px) rotateY(${x}px) rotateX(${y}px)`;
  });
});