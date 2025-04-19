# Athena AI - Image Implementation Guide

This guide outlines how images are implemented in the Athena AI website project, including best practices, organizational structure, and examples of different image implementation techniques.

## Directory Structure

Images are organized in the `/public/images/` directory with the following structure:

```
/public/images/
  /logos/      - Company and partner logos
  /icons/      - UI icons and symbols
  /hero/       - Hero section backgrounds and images
  /features/   - Images used in feature sections
  /testimonials/ - Testimonial author photos
  /backgrounds/ - Repeating patterns and background elements
  README.md    - Guidelines for image usage
```

## Image Types and Best Practices

The project uses several types of images with specific best practices for each:

### SVG Images

- Used for logos, icons, and simple illustrations
- Directly embedded in components for small icons
- Loaded as external files for larger SVG elements
- Example: `/public/images/logos/athena-logo.svg`

### Raster Images (PNG, JPG, WebP)

- PNG: Used for logos and UI elements requiring transparency
- JPG: Used for photographs and complex images
- WebP: Used for optimized versions with fallbacks to PNG/JPG
- All images should be optimized for web performance

## Image Implementation Techniques

The project demonstrates several techniques for implementing images:

### 1. Basic Image Implementation

```jsx
<img 
  src="/images/logos/company-logo.png" 
  alt="Company Name" 
  className="max-w-full h-auto" 
/>
```

### 2. Image with Fallback (ClientLogos.tsx)

```jsx
<img 
  src={logo.logoPath} 
  alt={`${logo.name} logo`}
  className="max-w-full max-h-full object-contain"
  onError={(e) => {
    // Fallback to letter display if image fails to load
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    target.nextElementSibling!.classList.remove('hidden');
  }}
/>
<div className="hidden text-2xl font-bold text-white">
  {logo.name.charAt(0)}
</div>
```

### 3. Progressive Image Loading (EnhancedTestimonials.tsx)

```jsx
<div className="w-16 h-16 rounded-full overflow-hidden relative bg-gray-800">
  {/* Placeholder showing while image loads */}
  <div 
    className={`absolute inset-0 bg-gradient-to-br from-athena-green/30 to-athena-blue/30 
      transition-opacity duration-300 ${imagesLoaded[imagePath] ? 'opacity-0' : 'opacity-100'}`}
  >
    <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-white">
      {name.charAt(0)}
    </div>
  </div>
  
  {/* Actual image that fades in when loaded */}
  <img 
    src={imagePath} 
    alt={name}
    className={`w-full h-full object-cover transition-opacity duration-500 
      ${imagesLoaded[imagePath] ? 'opacity-100' : 'opacity-0'}`}
    onLoad={() => handleImageLoad(imagePath)}
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      target.style.display = 'none';
    }}
  />
</div>
```

### 4. Background Images (HeroSection.tsx)

```jsx
<div 
  className="absolute inset-0 opacity-15"
  style={{
    backgroundImage: 'url(/images/grid-pattern.png)',
    backgroundSize: '600px',
    mixBlendMode: 'overlay'
  }}
></div>
```

## Performance Considerations

1. **Image Optimization:**
   - All images should be properly sized and compressed
   - Use WebP format with fallbacks where appropriate
   - Consider lazy loading for below-the-fold images

2. **Responsive Images:**
   - Use srcset and sizes attributes for responsive images
   - Serve appropriately sized images based on viewport

3. **Core Web Vitals:**
   - Prevent Cumulative Layout Shift (CLS) by setting dimensions
   - Optimize Largest Contentful Paint (LCP) with priority loading for hero images

## Component Examples with Images

The project includes several examples of components with enhanced image implementation:

1. **ClientLogos.tsx** - Shows company logos with fallback mechanism
2. **HeroSection.tsx** - Uses background images and decorative elements
3. **EnhancedTestimonials.tsx** - Implements progressive image loading

## Adding New Images

When adding new images to the project:

1. Place the image in the appropriate subdirectory of `/public/images/`
2. Optimize the image using tools like ImageOptim, TinyPNG, or Squoosh
3. Update the component to reference the image path
4. Implement appropriate loading and fallback mechanisms 