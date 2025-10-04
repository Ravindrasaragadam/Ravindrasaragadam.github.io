# Ravindra Saragadam - Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages deployment with a focus on performance, clean code, and visual appeal.

## Features

- **Dark Theme with Blue/Cyan Accents**: Modern color scheme optimized for readability (#0066cc, #00aaff, #00e5ff)
- **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- **Animated Particle Background**: Eye-catching hero section with optimized interactive particles (50 particles for performance)
- **Scroll Progress Bar**: Visual indicator showing reading progress at the top of the page
- **Scroll to Top Button**: Convenient button that appears when scrolling down
- **Smooth Scroll Animations**: Sections fade in as you scroll using Intersection Observer API
- **Enhanced Hover Effects**: Shimmer animations on cards for better interactivity
- **Mobile-Friendly Navigation**: Hamburger menu for smaller screens with smooth transitions
- **Blog System**: 4 complete blog posts with clean, readable layouts
- **Resume Download**: Direct PDF download functionality
- **No Build Process Required**: Pure static files, perfect for GitHub Pages
- **Performance Optimized**: Reduced particle count and optimized animations for smooth 60fps experience

## Live Demo

Visit the live site at: [https://ravindrasaragadam.github.io](https://ravindrasaragadam.github.io)

## Project Structure

```
.
├── index.html                          # Main portfolio page
├── styles.css                          # All styling with CSS variables
├── scripts.js                          # JavaScript for animations and interactions
├── data.js                             # Content data (easy to update)
├── Resume_V5.pdf                       # Downloadable resume
├── blog-scalable-pipelines.html        # Blog: Building Scalable Data Pipelines
├── blog-practical-over-perfect.html    # Blog: Practical Over Perfect Philosophy
├── blog-flink-vs-spark.html            # Blog: Flink vs Spark Streaming
├── blog-cloud-optimization.html        # Blog: Cloud Cost Optimization
└── README.md                           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No frameworks or dependencies
- **Google Fonts**: Poppins and Roboto
- **Font Awesome**: Icon library
- **Canvas API**: Particle animation background

## Sections

1. **Hero**: Animated intro with typing effect and key statistics
2. **About**: Personal introduction with core strengths
3. **Expertise**: Key technical areas with icons and tags
4. **Experience**: Timeline view of professional work history
5. **Projects**: Card-based layout of featured projects
6. **Blog**: Grid of blog posts with clickable cards
7. **Resume**: Professional summary with PDF download
8. **Contact**: Simple contact information and social links

## Customization

### Updating Content

All content is stored in `data.js` for easy updates:

```javascript
// Update personal info
const profileData = {
    name: 'Your Name',
    title: 'Your Title',
    // ... more fields
};

// Add/edit experience
const experiences = [
    {
        company: 'Company Name',
        role: 'Your Role',
        // ... more fields
    }
];
```

### Changing Colors

Colors are defined as CSS variables in `styles.css`:

```css
:root {
    --primary-color: #00aaff;      /* Main blue */
    --secondary-color: #0066cc;    /* Darker blue */
    --accent-color: #00e5ff;       /* Cyan accent */
    /* ... more colors */
}
```

### Adding Blog Posts

1. Create a new HTML file (e.g., `blog-your-post.html`)
2. Copy the structure from existing blog posts
3. Update content
4. Add entry to `blogPosts` array in `data.js`:

```javascript
{
    title: 'Your Blog Title',
    date: 'Month Day, Year',
    excerpt: 'Brief description...',
    tags: ['Tag1', 'Tag2'],
    link: 'blog-your-post.html',
    comingSoon: false
}
```

## Deployment to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click Save

3. **Access your site**:
   - Your site will be available at `https://yourusername.github.io`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Local Development

No build process required! Simply:

1. Clone the repository
2. Open `index.html` in your browser
3. Make changes and refresh to see updates

For a local server (optional):
```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

## License

© 2024 Ravindra Saragadam. All rights reserved.

## Contributing

This is a personal portfolio site, but feel free to fork it for your own use!

## Contact

- **Email**: ravindrasaragadam@gmail.com
- **LinkedIn**: [linkedin.com/in/ravindrasaragadam](https://www.linkedin.com/in/ravindrasaragadam)
- **GitHub**: [github.com/ravindrasaragadam](https://github.com/ravindrasaragadam)

---

Built with ❤️ using pure HTML, CSS, and JavaScript
