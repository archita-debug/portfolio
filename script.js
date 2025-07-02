function changeAboutMeText() {
    const aboutMeText = ["Tech Enthusiast", "Web Developer", "Programmer"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeText[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeText.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', function () {
    changeAboutMeText();

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });

     // Progress Bar Scroll Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const progress = progressBar.getAttribute('data-progress');
                    progressBar.style.width = progress + '%';
                    observer.unobserve(entry.target); // animate only once
                }
            }
        });
    }, {
        threshold: 0.5 // when 50% of the element is visible
    });

    const skills = document.querySelectorAll('#programming-languages .skill');
    skills.forEach(skill => observer.observe(skill));
});
