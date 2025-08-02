// Smooth scroll to the "Why Maspala" section when button is clicked
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startJourneyBtn");
  const enrollBtn = document.getElementById("enrollBtn");
  const sections = document.querySelectorAll("section");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const target = document.getElementById("why-maspala");
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (enrollBtn) {
    enrollBtn.addEventListener("click", () => {
      alert("🚀 Booking feature coming soon. Stay tuned!");
    });
  }

  // Scroll-triggered fade-in animation for sections
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Trigger once
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});