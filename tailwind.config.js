/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Toggle dark/light classes
    body.classList.toggle('bg-black');
    body.classList.toggle('text-white');
    body.classList.toggle('bg-white');
    body.classList.toggle('text-black');

    // Change button text based on current theme
    if (body.classList.contains('bg-black')) {
        toggleButton.textContent = 'Switch to Light Theme';
    } else {
        toggleButton.textContent = 'Switch to Dark Theme';
    }
});


