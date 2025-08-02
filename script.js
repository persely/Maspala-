document.getElementById("startJourneyBtn").onclick = () => {
  document.getElementById("why-maspala").scrollIntoView({ behavior: 'smooth' });
};

document.getElementById("enrollBtn").onclick = () => {
  alert("Booking feature coming soon. Stay tuned!");
};

section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

section.fade-in {
  opacity: 1;
  transform: translateY(0);
}