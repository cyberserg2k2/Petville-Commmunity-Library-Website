
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Dynamic content - Events list
const events = [
    { name: "Poetry Night", date: "Every Tuesday, 7 PM" },
    { name: "Mother's Day Craft Workshop", date: "May 8th, 2 PM" },
    { name: "Summer Reading Kickoff", date: "June 1st, 10 AM" },
    { name: "Educational Trip: Science Museum", date: "July 15th, 9 AM" }
];

const eventsList = document.getElementById('events-list');
events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.name} - ${event.date}`;
    eventsList.appendChild(li);
});

// Intersection Observer for animating sections
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});