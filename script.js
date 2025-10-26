const skillHints = {
  "Dart logo": "Dart",
  "JavaScript logo": "JavaScript",
  "Java logo": "Java",
  "C++ logo": "C++",
  "HTML logo": "HTML",
  "CSS logo": "CSS",
  "Flutter logo": "Flutter",
  "Google Maps logo": "Google Maps",
  "Android logo": "Android",
  "MySQL logo": "MySQL",
  "Firebase logo": "Firebase",
  "RESTful API logo": "RESTful API",
  "Git logo": "Git"
};

// Select all skill elements
const skills = document.querySelectorAll('.skill');

// Create tooltip element
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

// Show tooltip on hover
skills.forEach(skill => {
  skill.addEventListener('mouseenter', (event) => {
    const imgAlt = skill.querySelector('img').alt;
    const hint = skillHints[imgAlt] || "Unknown";
    tooltip.textContent = hint;

    const rect = skill.getBoundingClientRect();
    tooltip.style.top = `${rect.top - 40 + window.scrollY}px`;
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;

    tooltip.classList.add('show');
  });

  // Hide tooltip when mouse leaves
  skill.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
  });
});
