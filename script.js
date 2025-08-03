// === SMOOTH SCROLLING ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };
});

// === FADE-IN ELEMENTS ON SCROLL ===
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-target, section').forEach(el => fadeObserver.observe(el));

// === RIPPLE EFFECT (DYNAMIC & POWERFUL) ===
document.querySelectorAll('button, .btn').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight) * 1.5;
    const radius = diameter / 2;

    circle.classList.add("ripple");
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 1000);
  });
});

// === GLOW HOVER EFFECT (UPGRADED) ===
document.querySelectorAll('.btn-glow, .glass-card').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
});

// === PORTAL-STYLE PAGE LOAD ===
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("portal-enter");
  setTimeout(() => document.body.classList.remove("portal-enter"), 1200);
});

// === 3D ICON HOVER MOVEMENT ===
document.querySelectorAll(".floating-icon").forEach(icon => {
  const speed = parseFloat(icon.getAttribute("data-speed")) || 3;
  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.pageX) / 100 * speed;
    const y = (window.innerHeight / 2 - e.pageY) / 100 * speed;
    icon.style.transform = `translate(${x}px, ${y}px) rotateX(${y}px) rotateY(${x}px)`;
  });
});

// === TYPEWRITER EFFECT (ENHANCED) ===
document.querySelectorAll(".typewriter").forEach(el => {
  const text = el.dataset.text;
  const speed = parseInt(el.dataset.speed) || 50;
  let i = 0;

  const type = () => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };

  el.innerHTML = "";
  type();
});

// === CURSOR TRAIL (NEON STRETCH) ===
const colors = ["#00fff7", "#00ffe0", "#0ff", "#00ccff"];
let i = 0;

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  trail.style.backgroundColor = colors[i % colors.length];
  i++;

  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 700);
});

// === BACKGROUND PARALLAX ===
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".parallax-layer").forEach(layer => {
    const speed = parseFloat(layer.dataset.speed) || 3;
    const x = (window.innerWidth / 2 - e.pageX) / 100 * speed;
    const y = (window.innerHeight / 2 - e.pageY) / 100 * speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// === FLOATING BACKGROUND DOTS ===
const canvas = document.createElement("canvas");
canvas.id = "background-dots";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let particles = Array.from({ length: 60 }, () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 1,
  vy: (Math.random() - 0.5) * 1,
  radius: Math.random() * 2 + 1.5
}));

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffe0";
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// === MENU BLUR REVEAL ===
const menu = document.querySelector(".menu-blur");
if (menu) {
  menu.addEventListener("mouseenter", () => menu.classList.add("menu-active"));
  menu.addEventListener("mouseleave", () => menu.classList.remove("menu-active"));
});