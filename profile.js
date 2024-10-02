
function loadProfileImage(event) {
    const profileImage = document.getElementById('profileImage');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result; 
        };
        reader.readAsDataURL(file); 
    }
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    console.log("Profile Updated:", { name, email, bio });
    alert("Profile updated successfully!");
});

// DARK MODE
const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggleButton.textContent = "☀️ ";
}
themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "☀️";
        localStorage.setItem("theme", "dark"); 
    } else {
        themeToggleButton.textContent = "🌙";
        localStorage.setItem("theme", "light"); 
    }
});
