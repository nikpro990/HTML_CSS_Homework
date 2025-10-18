document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById("eye-icon-js");
    
    passwordInput.addEventListener("mouseenter", () => {
        eyeIcon.style.transform = "translateY(-6px)";
    });
    passwordInput.addEventListener("mouseleave", () => {
        eyeIcon.style.transform = "translateY(0)";  // Сброс
    });

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle icon opacity for visual feedback
        eyeIcon.style.opacity = type === 'text' ? '1' : '0.6';
    });
});
