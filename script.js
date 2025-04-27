// Show selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// On page load, show home
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');

  // Typed.js animation
  var typed = new Typed('#typed-text', {
    strings: [
      "Web Developer 💻",
      "Creative Learner 🎨",
      "Tech Enthusiast 🚀"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
});
