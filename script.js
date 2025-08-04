// Glowing logo on scroll
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo");
  if (window.scrollY > 10) {
    logo.style.textShadow = "0 0 20px gold";
  } else {
    logo.style.textShadow = "0 0 10px gold";
  }
});

// Button glow pulse
const ctaButton = document.querySelector(".cta-button");
setInterval(() => {
  ctaButton.classList.toggle("pulse");
}, 2000);