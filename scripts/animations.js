document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for progress bars
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetProgress = progressBar.getAttribute('data-progress');
                animateProgress(progressBar, targetProgress);
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.2 });

    // Observe all progress bars
    progressBars.forEach(bar => observer.observe(bar));

    // Initialize animations for project cards
    const projectCards = document.querySelectorAll('.project-card, .project-card1, .project-card2, .project-card3');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    projectCards.forEach(card => cardObserver.observe(card));
});

function animateProgress(progressBar, targetProgress) {
    let currentProgress = 0;
    const animationDuration = 1500; // 1.5 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = targetProgress / steps;
    const stepDuration = animationDuration / steps;

    const animation = setInterval(() => {
        if (currentProgress >= targetProgress) {
            progressBar.style.width = targetProgress + '%';
            progressBar.nextElementSibling.textContent = targetProgress + '%';
            clearInterval(animation);
            return;
        }
        currentProgress += increment;
        progressBar.style.width = currentProgress + '%';
        progressBar.nextElementSibling.textContent = Math.round(currentProgress) + '%';
    }, stepDuration);
}

