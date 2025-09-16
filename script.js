// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .scenario-card, .guarantee-card, .step, .case-item, .reason-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .scenario-card, .guarantee-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Pricing card pulse effect
    const pricingCard = document.querySelector('.pricing-card');
    if (pricingCard) {
        setInterval(() => {
            pricingCard.style.transform = 'scale(1.02)';
            setTimeout(() => {
                pricingCard.style.transform = 'scale(1)';
            }, 200);
        }, 5000);
    }
    
    // Counter animation for price
    const priceElement = document.querySelector('.amount');
    if (priceElement) {
        let hasAnimated = false;
        
        const priceObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateCounter(priceElement, 0, 9.9, 1000);
                    hasAnimated = true;
                }
            });
        });
        
        priceObserver.observe(priceElement);
    }
    
    // Mobile menu toggle (if needed)
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.className = 'menu-toggle';
    menuToggle.style.display = 'none';
    
    // Add menu toggle for mobile
    if (window.innerWidth <= 768) {
        document.querySelector('.nav').appendChild(menuToggle);
        menuToggle.style.display = 'block';
        navMenu.style.display = 'none';
        
        menuToggle.addEventListener('click', function() {
            if (navMenu.style.display === 'none') {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'white';
                navMenu.style.padding = '1rem';
                navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add fade-in effect to hero title instead of typing effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 1s ease-out';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Add click tracking for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Track click (you can add analytics here)
            console.log('CTA button clicked:', this.textContent.trim());
        });
    });
});

// Counter animation function
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * easeOutQuart(progress);
        element.textContent = current.toFixed(1);
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Easing function
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

// Image Modal Functionality
let currentFolder = '';
let currentImageIndex = 0;
let totalImages = 0;
let imageList = [];

// Initialize modal functionality
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const caseImages = document.querySelectorAll('.case-image');

    // Add click event to case images
    caseImages.forEach(imageContainer => {
        imageContainer.addEventListener('click', function() {
            const folder = this.getAttribute('data-folder');
            const title = this.getAttribute('data-title');
            openModal(folder, title);
        });
    });

    // Close modal events
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navigation events
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });

    // Window resize handler
    window.addEventListener('resize', function() {
        if (modal.style.display === 'block') {
            adjustModalSize();
        }
    });
}

function openModal(folder, title) {
    currentFolder = folder;
    currentImageIndex = 0;
    
    // Generate image list (assuming images are numbered 0, 1, 2, etc.)
    imageList = [];
    for (let i = 0; i < 20; i++) { // Check up to 20 images
        imageList.push(`${folder}/${i}.png`);
    }
    
    // Filter out non-existent images by checking if they load
    checkImagesExist(imageList).then(existingImages => {
        imageList = existingImages;
        totalImages = imageList.length;
        
        if (totalImages > 0) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('totalImages').textContent = totalImages;
            showCurrentImage();
            document.getElementById('imageModal').style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
}

function checkImagesExist(imageList) {
    const promises = imageList.map(src => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
        });
    });
    
    return Promise.all(promises).then(results => {
        return results.filter(src => src !== null);
    });
}

function showCurrentImage() {
    if (imageList.length > 0) {
        const modalImage = document.getElementById('modalImage');
        const currentImageSpan = document.getElementById('currentImage');
        
        // Show loading state
        modalImage.style.opacity = '0';
        
        modalImage.src = imageList[currentImageIndex];
        modalImage.alt = `${currentFolder} 分析报告案例 ${currentImageIndex + 1}`;
        currentImageSpan.textContent = currentImageIndex + 1;
        
        // Wait for image to load, then adjust modal size
        modalImage.onload = function() {
            adjustModalSize();
            modalImage.style.opacity = '1';
        };
        
        // Update navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.style.display = totalImages > 1 ? 'block' : 'none';
        nextBtn.style.display = totalImages > 1 ? 'block' : 'none';
    }
}

function adjustModalSize() {
    const modalImage = document.getElementById('modalImage');
    const modalContent = document.querySelector('.modal-content');
    const modalBody = document.querySelector('.modal-body');
    
    if (modalImage.complete && modalImage.naturalWidth > 0) {
        const imageAspectRatio = modalImage.naturalWidth / modalImage.naturalHeight;
        const maxWidth = Math.min(window.innerWidth * 0.9, 1200);
        const maxHeight = Math.min(window.innerHeight * 0.8, 800);
        
        let imageWidth, imageHeight;
        
        // Calculate optimal image size while maintaining aspect ratio
        if (imageAspectRatio > maxWidth / maxHeight) {
            // Image is wider than the container
            imageWidth = maxWidth;
            imageHeight = maxWidth / imageAspectRatio;
        } else {
            // Image is taller than the container
            imageHeight = maxHeight;
            imageWidth = maxHeight * imageAspectRatio;
        }
        
        // Set image dimensions
        modalImage.style.width = imageWidth + 'px';
        modalImage.style.height = imageHeight + 'px';
        
        // Adjust modal body height to fit the image
        const headerHeight = document.querySelector('.modal-header').offsetHeight;
        const footerHeight = document.querySelector('.modal-footer').offsetHeight;
        const padding = 32; // 1rem * 2 (top + bottom padding)
        
        modalBody.style.height = (imageHeight + padding) + 'px';
        modalContent.style.maxHeight = (headerHeight + imageHeight + footerHeight + padding) + 'px';
    }
}

function showPreviousImage() {
    if (totalImages > 1) {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showCurrentImage();
    }
}

function showNextImage() {
    if (totalImages > 1) {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showCurrentImage();
    }
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Add CSS for mobile menu toggle and modal
const style = document.createElement('style');
style.textContent = `
    .menu-toggle {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #667eea;
        cursor: pointer;
        padding: 0.5rem;
    }
    
    @media (max-width: 768px) {
        .nav {
            position: relative;
        }
        
        .nav-menu {
            transition: all 0.3s ease;
        }
    }
    
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Initialize image modal
    initImageModal();
});
