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