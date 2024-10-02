const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.container');

toggleButton.addEventListener('click', () => {
    // Toggle dark/light classes for body and container
    body.classList.toggle('bg-black');
    body.classList.toggle('text-white');
    body.classList.toggle('bg-white');
    body.classList.toggle('text-black');

    container.classList.toggle('bg-black');
    container.classList.toggle('bg-white');
    container.classList.toggle('text-white');
    container.classList.toggle('text-black');

    // Change button text based on current theme
    if (body.classList.contains('bg-black')) {
        toggleButton.textContent = 'dark';
    } else {
        toggleButton.textContent = 'light';
    }
});
