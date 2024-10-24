// Articles data
const articles = [
    {
        image: "/images/blog_readingtodogs.png",
        title: "New Children's Reading Program Launches",
        date: "October 15, 2024",
        content: "We're excited to announce the launch of our new \"Paws for Reading\" program, where children can practice reading aloud to therapy dogs."
    },
    {
        image: "/images/blog_newcomputers.png",
        title: "Library Receives Grant for Technology Upgrade",
        date: "October 10, 2024",
        content: "The Petville Community Library has been awarded a $50,000 grant to upgrade our computer lab."
    },

    {
        image: "/images/blog_author.png",
        title: "Local Author Spotlight: Meet Sarah Johnson",
        date: "October 5, 2024",
        content: "Join us next Thursday evening for a reading and Q&A session with Petville's own Sarah Johnson, author of the bestselling mystery novel 'Whispers in the Dark'. Books will be available for purchase and signing after the event."
    },

    {
        image: "/images/blog_reading.png",
        title: "Summer Reading Challenge Results",
        date: "September 30, 2024",
        content: "Congratulations to all participants in our Summer Reading Challenge! This year, Petville readers collectively read over 5,000 books. Special recognition goes to 10-year-old Tommy Baker, who read an impressive 50 books over the summer."
    }
 
       

];

// News ticker items
const tickerItems = ["📚" + articles[0].title,
    "📱" + articles[1].title,
    "📚" + articles[2].title,
    "📚" + articles[3].title
];

// Function to start the news ticker
function startTicker() {
    const ticker = document.getElementById('news-ticker');
    ticker.innerHTML = `<div class="ticker-content">${tickerItems.join(' &nbsp;&nbsp;|&nbsp;&nbsp; ')}</div>`;
}

// Function to display articles
function displayArticles() {
    const container = document.getElementById('articleContainer');
    container.innerHTML = ''; // Clear existing articles

    articles.forEach(article => {
        container.innerHTML += `
            <article>
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <h2>${article.title}</h2>
                <p class="date">${article.date}</p>
                <p>${article.content}</p>
            </article>
        `;
    });
}

// Add a new article
function addArticle(newArticle) {
    articles.unshift(newArticle); // Add to beginning of array
    displayArticles(); // Refresh the display
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startTicker();
    displayArticles();
});