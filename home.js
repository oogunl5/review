function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdownContent');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdownContent');
  const arrow = document.getElementById('arrow');
  if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      arrow.classList.remove('arrow-up');
  } else {
      dropdownContent.style.display = 'block';
      arrow.classList.add('arrow-up');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.getElementById('dropdownBtn');
  const dropdownContent = document.getElementById('dropdownContent');
  const arrow = document.getElementById('arrow').querySelector('.arrow-down');

  dropdownBtn.addEventListener('click', function() {
      // Toggle the display of the dropdown content
      if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
          dropdownContent.style.display = 'block';
          arrow.classList.remove('arrow-down');
          arrow.classList.add('arrow-up');
      } else {
          dropdownContent.style.display = 'none';
          arrow.classList.remove('arrow-up');
          arrow.classList.add('arrow-down');
      }
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function(event) {
      if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.style.display = 'none';
          arrow.classList.remove('arrow-up');
          arrow.classList.add('arrow-down');
      }
  });
});
