// Skill Animation
function animateSkills() {
    const bars = document.querySelectorAll('.skill-bar');
    bars.forEach(bar => {
        bar.style.width = bar.dataset.skillLevel;
    });
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        localStorage.setItem('formData', JSON.stringify({ name, email, message }));
        window.location.href = 'form-details.html'; // Redirect to new page to display data
    }
});

// Theme Toggle
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Run animations when the page loads
window.onload = function() {
    animateSkills();
};