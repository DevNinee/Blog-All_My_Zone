
// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeToggleIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggleIcon(newTheme);
});

function updateThemeToggleIcon(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Mobile Navigation Toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navMenu = document.getElementById('navMenu');

mobileNavToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const isActive = navMenu.classList.contains('active');
  mobileNavToggle.textContent = isActive ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('active');
    mobileNavToggle.textContent = '☰';
  }
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
const blogPosts = document.querySelectorAll('.blog-post');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  
  blogPosts.forEach(post => {
    const title = post.querySelector('h4').textContent.toLowerCase();
    const content = post.querySelector('p').textContent.toLowerCase();
    const tags = post.getAttribute('data-tags').toLowerCase();
    
    const isMatch = title.includes(searchTerm) || 
                   content.includes(searchTerm) || 
                   tags.includes(searchTerm);
    
    post.style.display = isMatch ? 'block' : 'none';
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon.`;
    
    // Insert success message after form
    contactForm.parentNode.insertBefore(successDiv, contactForm.nextSibling);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  });
}

// Reading Time Calculator
function calculateReadingTime(wordCount) {
  const wordsPerMinute = 240; // Average reading speed
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Update reading times on page load
document.addEventListener('DOMContentLoaded', () => {
  const blogPosts = document.querySelectorAll('.blog-post[data-word-count]');
  
  blogPosts.forEach(post => {
    const wordCount = parseInt(post.getAttribute('data-word-count'));
    const readingTimeElement = post.querySelector('.reading-time');
    
    if (readingTimeElement && wordCount) {
      readingTimeElement.textContent = calculateReadingTime(wordCount);
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
