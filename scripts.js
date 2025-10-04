// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Progress Bar and Scroll to Top Button (optimized with throttle)
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    let ticking = false;
    
    function updateScroll() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        requestAnimationFrame(() => {
            scrollProgress.style.width = scrolled + '%';
            
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateScroll);
        }
    }, { passive: true });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Typing animation for hero section
    const typingText = document.getElementById('typingText');
    const roles = profileData.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (!isDeleting && charIndex < currentRole.length) {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        } else if (isDeleting && charIndex > 0) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // Particle background animation
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 50; // Reduced for better performance

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(0, 170, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections (optimized - only check nearby particles)
        particles.forEach((particle, index) => {
            for (let j = index + 1; j < Math.min(index + 5, particles.length); j++) {
                const dx = particles[j].x - particle.x;
                const dy = particles[j].y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(0, 170, 255, ${0.15 - distance / 800})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Load dynamic content
    loadHeroStats();
    loadAboutContent();
    loadExpertise();
    loadExperience();
    loadProjects();
    loadBlogPosts();

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Observe blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        observer.observe(card);
    });
});

// Load hero statistics
function loadHeroStats() {
    const statsContainer = document.getElementById('heroStats');
    profileData.highlights.forEach((stat, index) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.style.animationDelay = `${1 + index * 0.1}s`;
        statItem.innerHTML = `
            <span class="stat-value">${stat.value}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsContainer.appendChild(statItem);
    });
}

// Load about content
function loadAboutContent() {
    const aboutText = document.getElementById('aboutText');
    const paragraphs = profileData.summary.split('\n\n');
    paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph.trim();
        p.style.marginBottom = '1rem';
        aboutText.appendChild(p);
    });

    const strengthsContainer = document.getElementById('aboutStrengths');
    profileData.strengths.forEach((strength, index) => {
        const strengthItem = document.createElement('div');
        strengthItem.className = 'strength-item';
        strengthItem.innerHTML = `
            <div class="strength-icon">
                <i class="${strength.icon}"></i>
            </div>
            <div class="strength-content">
                <h3>${strength.title}</h3>
                <p>${strength.description}</p>
            </div>
        `;
        strengthsContainer.appendChild(strengthItem);
    });
}

// Load expertise
function loadExpertise() {
    const expertiseGrid = document.getElementById('expertiseGrid');
    expertise.forEach((item, index) => {
        const expertiseCard = document.createElement('div');
        expertiseCard.className = 'expertise-card';
        expertiseCard.style.animationDelay = `${index * 0.1}s`;
        
        const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        expertiseCard.innerHTML = `
            <div class="expertise-icon">
                <i class="${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="expertise-tags">
                ${tagsHTML}
            </div>
        `;
        expertiseGrid.appendChild(expertiseCard);
    });
}

// Load experience timeline
function loadExperience() {
    const timeline = document.getElementById('timeline');
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const techTags = exp.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');
        const descriptions = exp.description.map(desc => `<li>${desc}</li>`).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-company">${exp.company}</h3>
                    <span class="timeline-duration">${exp.duration}</span>
                </div>
                <h4 class="timeline-role">${exp.role}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">${exp.location}</p>
                <ul class="timeline-description">
                    ${descriptions}
                </ul>
                <div class="timeline-tech">
                    ${techTags}
                </div>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Load projects
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techTags = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');
        
        let linksHTML = '';
        if (project.github || project.demo) {
            linksHTML = '<div class="project-links">';
            if (project.github) {
                linksHTML += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fab fa-github"></i> Code
                </a>`;
            }
            if (project.demo) {
                linksHTML += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>`;
            }
            linksHTML += '</div>';
        }
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="timeline-tech">
                    ${techTags}
                </div>
                ${linksHTML}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Load blog posts
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    blogPosts.forEach((post, index) => {
        const blogCard = document.createElement('a');
        blogCard.className = 'blog-card';
        if (post.comingSoon) {
            blogCard.className += ' coming-soon';
            blogCard.href = '#';
            blogCard.onclick = (e) => e.preventDefault();
        } else {
            blogCard.href = post.link;
        }
        
        const tagsHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const comingSoonBadge = post.comingSoon ? '<span class="coming-soon-badge">Coming Soon</span>' : '';
        
        blogCard.innerHTML = `
            <div class="blog-date">${post.date}</div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${tagsHTML}
            </div>
            ${comingSoonBadge}
        `;
        blogGrid.appendChild(blogCard);
    });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
