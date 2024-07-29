function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    document.getElementById(sectionId).style.display = 'block';
}

//popup work experience
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active")
}

//popup courses
function togglePopup1(){
  document.getElementById("popup-2").classList.toggle("active")
}

function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

function closeSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');


}

document.getElementById('openImageBtn').addEventListener('click', function() {
    // URL of the image
  const imageUrl = 'assets/ecdl.jpeg';
    // Open image in a new tab
  window.open(imageUrl, '_blank');
 });


