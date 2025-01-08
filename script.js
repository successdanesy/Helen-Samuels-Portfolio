const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});


//code to open and close certificate image
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    const modalImg = modal.querySelector('.modal-content');
    modalImg.src = event.target.src; // Set the image source dynamically
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

//JavaScript for Animating Progress Circles

document.addEventListener("DOMContentLoaded", () => {
  const skillData = [
      { id: 0, percentage: 73 },
      { id: 1, percentage: 100 },
  ];

  document.querySelectorAll(".skill-chart").forEach((chart, index) => {
      const circle = chart.querySelector(".progress");
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      const percent = skillData[index].percentage;
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
  });
});


//scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

//sidebar
function showSidebar() {
  document.getElementById('sidebar').classList.add('show');
}

function hideSidebar() {
  document.getElementById('sidebar').classList.remove('show');
}