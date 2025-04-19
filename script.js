// --- Apply smooth scrolling to the entire document via CSS ---
document.documentElement.style.scrollBehavior = "smooth";

// --- Improved Smooth Scrolling Function with better performance --- 
const smoothScrollTo = (targetY, duration = 800) => {
    // Cancel any previous animations
    if (window.scrollAnimation) {
        clearInterval(window.scrollAnimation);
        window.scrollAnimation = null;
    }
    
    const startY = window.scrollY;
    const distance = targetY - startY;
    
    // Nothing to scroll
    if (Math.abs(distance) < 5) return;
    
    // Determine whether we're scrolling up or down
    const direction = distance > 0 ? 1 : -1;
    
    // Calculate scroll parameters
    const startTime = performance.now();
    const endTime = startTime + duration;
    
    // The key to smoother scrolling is fewer, more precise updates
    // Instead of every frame, we'll do larger steps
    window.scrollAnimation = setInterval(() => {
        const currentTime = performance.now();
        
        // Calculate how far along we are (0 to 1)
        let elapsed = (currentTime - startTime) / duration;
        
        // Animation is complete
        if (elapsed >= 1 || currentTime >= endTime) {
            clearInterval(window.scrollAnimation);
            window.scrollAnimation = null;
            
            // Ensure we land exactly at the target position
            window.scrollTo({
                top: targetY,
                behavior: 'auto'
            });
            return;
        }
        
        // Apply smoothing with improved cubic-bezier approximation
        // This curve starts faster and slows down more gradually
        elapsed = elapsed < 0.5 ? 
            4 * elapsed * elapsed * elapsed : 
            1 - Math.pow(-2 * elapsed + 2, 3) / 2;
            
        // Apply the scroll
        window.scrollTo({
            top: startY + distance * elapsed,
            behavior: 'auto'  // Avoid compounding the built-in smooth scroll
        });
    }, 16); // Approx 60fps, but with simpler calculations
};

// Store for global access
window.smoothScrollTo = smoothScrollTo;
window.scrollAnimation = null;

// --- Event Listener Setup ---
document.addEventListener('DOMContentLoaded', () => {
    // Get the header height for offset calculations
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;
    
    // Add click handlers to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            
            if (hrefAttribute && hrefAttribute.startsWith('#') && hrefAttribute.length > 1) {
                const targetId = hrefAttribute.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    
                    // Calculate position accounting for header
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerHeight - 10; // Extra 10px buffer
                    
                    // Use our smooth scroll function
                    smoothScrollTo(offsetPosition, 900); // Slightly longer duration for more smoothness
                }
            }
        });
    });
    
    // Disable scrolling while animation is in progress for smoother experience
    document.addEventListener('wheel', function(e) {
        if (window.scrollAnimation) {
            e.preventDefault();
        }
    }, { passive: false });
});

console.log("Athena script loaded with SUPER SMOOTH scrolling enabled"); 