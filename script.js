// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function highlightNav() {
  let scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${sectionId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Contact button functionality
const contactButtons = document.querySelectorAll('.btn-contact, .btn-primary, .footer-btn');
contactButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Scroll to contact section
    const footerCta = document.querySelector('.footer-cta');
    if (footerCta) {
      window.scrollTo({
        top: footerCta.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// PDF download button
const pdfButton = document.querySelector('.btn-pdf');
pdfButton.addEventListener('click', (e) => {
  e.preventDefault();
  // Add your PDF download logic here
  alert('PDF download functionality would be implemented here');
});

// LinkedIn button functionality
const linkedinButtons = document.querySelectorAll('.btn-secondary, .footer-btn-secondary');
linkedinButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Replace with actual LinkedIn URL
    window.open('https://linkedin.com/in/sashiko-dayani', '_blank');
  });
});