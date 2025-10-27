export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React: A Comprehensive Guide",
    excerpt: "Learn the fundamentals of React, from components to state management. This comprehensive guide will take you from beginner to building your first React application.",
    content: `
# Getting Started with React: A Comprehensive Guide

React has revolutionized the way we build user interfaces. Whether you're new to web development or coming from another framework, this guide will help you understand React's core concepts.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. Created by Facebook, it's designed to make building interactive UIs painless and efficient.

## Key Concepts

### Components
Components are the building blocks of React applications. They're reusable pieces of code that return JSX (JavaScript XML).

### State
State allows components to create and manage their own data. When state changes, the component re-renders.

### Props
Props (properties) are how components receive data from their parent components.

## Your First Component

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

This simple component takes a name prop and displays a greeting.

## Getting Started

1. **Install Node.js** - React requires Node.js to run
2. **Create a new React app** - Use Create React App or Vite
3. **Learn JSX** - The syntax extension for JavaScript
4. **Understand components** - Build your first components
5. **Master state and props** - Handle data in your applications

React's component-based architecture makes it easy to build and maintain large applications. Start small, build components, and gradually increase complexity as you become more comfortable.

> "The best way to learn React is by building projects. Start with simple components and gradually work your way up to more complex applications."

Happy coding!
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Better Web Design",
    excerpt: "Discover the latest CSS features and techniques that will elevate your web design skills. From Grid to Flexbox, learn how to create stunning layouts.",
    content: `
# Modern CSS Techniques for Better Web Design

CSS has evolved tremendously over the years. Modern CSS provides powerful tools that make creating beautiful, responsive designs easier than ever before.

## CSS Grid: The Layout Revolution

CSS Grid is a two-dimensional layout system that gives you complete control over rows and columns.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
\`\`\`

## Flexbox: One-Dimensional Layouts Made Easy

Flexbox is perfect for arranging items in a single row or column.

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Custom Properties (Variables)

Variables make your CSS more maintainable and dynamic:

\`\`\`css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}

.button {
  background: var(--primary-color);
}
\`\`\`

## Advanced Selectors

Modern CSS offers powerful selectors for targeting specific elements:

- \`:nth-child()\` - Select specific child elements
- \`:has()\` - Select parent elements based on children
- \`:where()\` and \`:is()\` - Logical selectors

## Responsive Design with Container Queries

Container queries allow components to respond to their container's size:

\`\`\`css
@container (min-width: 500px) {
  .card {
    flex-direction: row;
  }
}
\`\`\`

## Best Practices

1. **Use semantic HTML** - Build on a solid foundation
2. **Mobile-first approach** - Start with mobile designs
3. **Progressive enhancement** - Add features as screen size increases
4. **Performance matters** - Optimize CSS for faster loading

These modern CSS techniques will help you create more efficient, maintainable, and beautiful web designs. Experiment with these features and see how they can improve your development workflow.
    `,
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features Every Developer Should Know",
    excerpt: "Explore the most important ES6+ features that have transformed JavaScript development. From arrow functions to async/await, master modern JavaScript.",
    content: `
# JavaScript ES6+ Features Every Developer Should Know

JavaScript has evolved significantly with ES6 (ES2015) and beyond. These features make code more readable, maintainable, and powerful.

## Arrow Functions

Arrow functions provide a concise syntax and lexical \`this\` binding:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Destructuring Assignment

Extract values from arrays and objects easily:

\`\`\`javascript
// Array destructuring
const [first, second] = [1, 2, 3];

// Object destructuring
const { name, age } = person;
\`\`\`

## Template Literals

Create strings with embedded expressions:

\`\`\`javascript
const name = "World";
const greeting = \`Hello, \${name}!\`;
\`\`\`

## Async/Await

Handle asynchronous operations more elegantly:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Modules (Import/Export)

Organize code into reusable modules:

\`\`\`javascript
// export
export const PI = 3.14159;
export default function calculate() {}

// import
import calculate, { PI } from './math.js';
\`\`\`

## Spread and Rest Operators

The \`...\` operator is versatile:

\`\`\`javascript
// Spread arrays
const newArray = [...oldArray, newItem];

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
\`\`\`

## Optional Chaining

Safely access nested object properties:

\`\`\`javascript
const userName = user?.profile?.name || 'Anonymous';
\`\`\`

## Nullish Coalescing

Provide default values for null/undefined:

\`\`\`javascript
const value = input ?? 'default value';
\`\`\`

These ES6+ features have become essential for modern JavaScript development. They improve code quality, reduce bugs, and make development more enjoyable.

> "Modern JavaScript features aren't just syntax sugar – they solve real problems and make code more maintainable."

Keep learning and experimenting with these features to become a more effective JavaScript developer!
    `,
    author: "Alex Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Building Responsive Websites with Mobile-First Design",
    excerpt: "Learn why mobile-first design is crucial for modern web development and how to implement responsive layouts that work beautifully on all devices.",
    content: `
# Building Responsive Websites with Mobile-First Design

In today's multi-device world, responsive design isn't optional—it's essential. Mobile-first design ensures your websites work perfectly on every screen size.

## Why Mobile-First?

Mobile-first design starts with the smallest screen and progressively enhances for larger devices. This approach offers several benefits:

- **Better performance** on mobile devices
- **Improved user experience** across all devices
- **Forced prioritization** of essential content
- **Future-proof** design approach

## The Mobile-First Workflow

### 1. Start with Mobile Layouts

Design your content hierarchy for mobile screens first:

\`\`\`css
/* Base styles for mobile */
.container {
  padding: 1rem;
  max-width: 100%;
}

.card {
  margin-bottom: 1rem;
  padding: 1rem;
}
\`\`\`

### 2. Add Breakpoints Progressively

Use min-width media queries to enhance for larger screens:

\`\`\`css
/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Essential Responsive Techniques

### Flexible Grid Systems

Use CSS Grid and Flexbox for flexible layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

### Responsive Images

Ensure images scale properly:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

### Fluid Typography

Use relative units for scalable text:

\`\`\`css
body {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}
\`\`\`

## Common Breakpoints

Standard breakpoints for different devices:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## Testing Your Responsive Design

1. **Use browser dev tools** - Test different screen sizes
2. **Real device testing** - Nothing beats actual devices
3. **Online tools** - Use responsive design checkers
4. **Performance testing** - Ensure fast loading on mobile

## Best Practices

### Content Strategy
- Prioritize essential content for mobile
- Use progressive disclosure for complex information
- Ensure touch targets are at least 44px × 44px

### Performance Optimization
- Optimize images for different screen densities
- Use efficient CSS and minimize HTTP requests
- Implement lazy loading for images

### Accessibility
- Ensure good contrast ratios
- Make navigation keyboard accessible
- Use semantic HTML elements

## Tools and Frameworks

Popular tools for responsive development:

- **CSS Frameworks**: Bootstrap, Tailwind CSS
- **Testing Tools**: BrowserStack, Responsive Design Checker
- **Design Tools**: Figma, Adobe XD

Mobile-first responsive design creates better user experiences and more maintainable codebases. Start small, think progressively, and always test on real devices.

> "Good responsive design isn't about making things work on mobile—it's about making things work beautifully everywhere."

Remember: responsive design is an ongoing process, not a one-time task!
    `,
    author: "Emma Davis",
    date: "2024-01-08",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Introduction to Web Performance Optimization",
    excerpt: "Discover essential techniques for optimizing web performance. Learn how to make your websites faster, improve user experience, and boost SEO rankings.",
    content: `
# Introduction to Web Performance Optimization

Web performance is crucial for user experience, SEO, and business success. A slow website can lose visitors, reduce conversions, and hurt search rankings.

## Why Performance Matters

### User Experience Impact
- **3-second rule**: Users expect pages to load in under 3 seconds
- **Bounce rates**: Slow sites have higher bounce rates
- **Mobile users**: Performance is even more critical on mobile devices

### Business Impact
- **Conversion rates**: Faster sites convert better
- **SEO rankings**: Page speed is a ranking factor
- **User satisfaction**: Fast sites create happy users

## Core Web Vitals

Google's Core Web Vitals measure user experience:

### Largest Contentful Paint (LCP)
Measures loading performance. Should occur within 2.5 seconds.

### First Input Delay (FID)
Measures interactivity. Should be less than 100 milliseconds.

### Cumulative Layout Shift (CLS)
Measures visual stability. Should be less than 0.1.

## Performance Optimization Techniques

### 1. Optimize Images

Images often account for most of a page's weight:

\`\`\`html
<!-- Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

### 2. Minimize HTTP Requests

Reduce the number of requests:

- Combine CSS and JavaScript files
- Use CSS sprites for icons
- Inline critical CSS
- Use data URIs for small images

### 3. Enable Compression

Use gzip or Brotli compression:

\`\`\`
# .htaccess example
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/javascript
</IfModule>
\`\`\`

### 4. Optimize CSS and JavaScript

#### CSS Optimization
- Remove unused CSS
- Minify CSS files
- Use critical CSS inline

#### JavaScript Optimization
- Minify JavaScript
- Use tree shaking to remove unused code
- Implement code splitting

\`\`\`javascript
// Dynamic imports for code splitting
const lazyComponent = () => import('./LazyComponent');
\`\`\`

### 5. Leverage Browser Caching

Set appropriate cache headers:

\`\`\`
# Cache static assets for 1 year
<FilesMatch "\\.(css|js|png|jpg|jpeg|gif|ico|svg)$">
  ExpiresActive On
  ExpiresDefault "access plus 1 year"
</FilesMatch>
\`\`\`

### 6. Use a Content Delivery Network (CDN)

CDNs deliver content from servers closer to users:

- Reduced latency
- Better availability
- Improved performance globally

## Performance Monitoring Tools

### Browser Tools
- **Chrome DevTools**: Performance panel and Lighthouse
- **Firefox DevTools**: Network and Performance tabs

### Online Tools
- **Google PageSpeed Insights**: Comprehensive performance analysis
- **GTmetrix**: Detailed performance reports
- **WebPageTest**: Advanced testing with multiple locations

### Real User Monitoring (RUM)
- **Google Analytics**: Core Web Vitals report
- **New Relic**: Application performance monitoring
- **Datadog**: Real-time performance monitoring

## Performance Budget

Set performance budgets to maintain standards:

\`\`\`json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyScript",
      "maximumWarning": "150kb",
      "maximumError": "300kb"
    }
  ]
}
\`\`\`

## Best Practices Checklist

### Loading Optimization
- [ ] Optimize and compress images
- [ ] Minify CSS, JavaScript, and HTML
- [ ] Enable compression (gzip/Brotli)
- [ ] Use efficient caching strategies
- [ ] Implement lazy loading

### Rendering Optimization
- [ ] Minimize render-blocking resources
- [ ] Optimize critical rendering path
- [ ] Use efficient CSS selectors
- [ ] Avoid layout thrashing

### Network Optimization
- [ ] Reduce HTTP requests
- [ ] Use HTTP/2
- [ ] Implement resource hints (preload, prefetch)
- [ ] Optimize DNS lookups

## Measuring Success

Track these metrics to monitor performance improvements:

- **Page load time**: Total time to fully load
- **Time to first byte (TTFB)**: Server response time
- **First contentful paint (FCP)**: First visible content
- **Speed index**: How quickly content appears

Performance optimization is an ongoing process. Regular monitoring and optimization ensure your site remains fast as it grows and evolves.

> "Performance is not just about speed—it's about creating seamless user experiences that keep visitors engaged."

Start with the biggest impact optimizations and gradually refine your performance strategy!
    `,
    author: "David Kim",
    date: "2024-01-05",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  }
];

export default blogPosts;