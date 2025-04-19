# Images Directory

This directory contains all the image assets used throughout the Athena AI website.

## Image Guidelines

1. **Format Guidelines**:
   - Use PNG for logos and icons that require transparency
   - Use JPG for photographs and complex images
   - Use SVG for simple icons, logos, and illustrations that should scale
   - Use WebP for the best compression with quality (add fallbacks for older browsers)

2. **Naming Conventions**:
   - Use kebab-case for all filenames (e.g., `company-logo.png`)
   - Include sizing in filename if multiple sizes exist (e.g., `hero-banner-lg.jpg`)
   - Group related images with consistent prefixes (e.g., `icon-*`, `logo-*`)

3. **Optimization Requirements**:
   - All images should be optimized for web use
   - Logos should typically be 200-300px wide maximum
   - Hero images should be 1920px wide maximum
   - Thumbnails should be appropriately sized for their usage

## Directory Structure

```
/images
  /logos        - Company and partner logos
  /icons        - UI icons and symbols
  /hero         - Hero section backgrounds and images
  /features     - Images used in feature sections
  /testimonials - Testimonial author photos
  /backgrounds  - Repeating patterns and background elements
```

## Adding New Images

When adding new images to the project:

1. Place the image in the appropriate subdirectory
2. Optimize the image using tools like ImageOptim, TinyPNG, or Squoosh
3. Update the component to reference the image path from the `/images/` directory
4. Add a fallback mechanism for critical images

## Implementation Example

```jsx
// Good implementation with fallback
<img 
  src="/images/logos/company-logo.png" 
  alt="Company Name" 
  className="max-w-full h-auto"
  onError={(e) => {
    // Fallback if image fails to load
    e.target.src = '/images/logos/placeholder-logo.png';
  }} 
/>
```

## Responsive Images

For responsive images, consider using the `srcset` attribute:

```jsx
<img 
  src="/images/feature-sm.jpg" 
  srcSet="/images/feature-sm.jpg 400w, /images/feature-md.jpg 800w, /images/feature-lg.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  alt="Feature description"
/>
``` 