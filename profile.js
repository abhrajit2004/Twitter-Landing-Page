// Toggle between light and dark mode
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

// Profile image upload preview.
function loadProfileImage(event) {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = URL.createObjectURL(event.target.files[0]);
}

// Profile form submission with feedback.
const profileForm = document.getElementById('profileForm');
const updateSuccessMessage = document.getElementById('updateSuccessMessage');

profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateSuccessMessage.style.display = 'block';
    setTimeout(() => {
        updateSuccessMessage.style.display = 'none';
    }, 3000);
});
