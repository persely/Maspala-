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

// === TYPEWRITER TEXT EFFECT ===
const typeTargets = document.querySelectorAll(".typewriter");
typeTargets.forEach(el => {
  const text = el.getAttribute("data-text");
  let i = 0;
  const speed = parseInt(el.getAttribute("data-speed")) || 80;

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

// === NEON CURSOR TRAIL ===
const trailColors = ["#00fff7", "#00ffe0", "#00ffd0"];
let index = 0;

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  trail.style.backgroundColor = trailColors[index % trailColors.length];
  index++;

  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 500);
});

// === PARALLAX BACKGROUND EFFECT ===
document.addEventListener("mousemove", e => {
  const layers = document.querySelectorAll(".parallax-layer");
  layers.forEach(layer => {
    const speed = layer.getAttribute("data-speed") || 5;
    const x = (window.innerWidth / 2 - e.pageX) / 100 * speed;
    const y = (window.innerHeight / 2 - e.pageY) / 100 * speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// === FLOATING DOTS BACKGROUND ===
const canvas = document.createElement("canvas");
canvas.id = "background-dots";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let particles = [];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2 + 1
  });
}

function animateDots() {
  ctx.clearRect(0, 0, width, height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffee";
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }
  requestAnimationFrame(animateDots);
}
animateDots();
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// === BLUR REVEAL MENU EFFECT ===
const menu = document.querySelector(".menu-blur");
if (menu) {
  menu.addEventListener("mouseenter", () => {
    menu.classList.add("menu-active");
  });
  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("menu-active");
  });
}

document.querySelectorAll('.glass-card, .btn-glow').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .fade-target').forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple-effect');
    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

document.querySelectorAll('.pulse-hover').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('pulse');
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('pulse');
  });
});

// Button ripple + glow
document.querySelectorAll('.glass-card, .btn-glow').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  });
});

// Fade on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-target').forEach(el => {
  observer.observe(el);
});

// Ripple click
document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple-effect');
    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// Button glow tracking
document.querySelectorAll('.glass-card, .btn-glow').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-target').forEach(el => {
  observer.observe(el);
});

// Ripple effect on click
document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple-effect');
    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});