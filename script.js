// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.right = '0'; // Slide in from right
//     document.body.classList.add('sidebar-open'); // Add class to hide menu button
//   }

//   function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.right = '-250px'; // Slide out to the right
//     document.body.classList.remove('sidebar-open'); // Remove class to show menu button again
//   }

function showSidebar() {
    document.getElementById('sidebar').classList.add('show');
  }
  
  function hideSidebar() {
    document.getElementById('sidebar').classList.remove('show');
  }
  
  
  // Open the Modal
  function openModal(src) {
    document.getElementById('myModal').style.display = "block";
    document.getElementById('modalImage').src = src;
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  // Close the modal if clicked outside the image
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      closeModal();
    }
  }
  
  // Add event listener to the close button
  document.querySelector(".close").addEventListener('click', closeModal);
  
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }