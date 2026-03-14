document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.fade-in');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Throttle scroll event for better performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                revealOnScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Map Modal Logic
    const mapModal = document.getElementById('mapModal');
    const closeBtn = document.querySelector('.close-modal');
    const mapLinks = document.querySelectorAll('.map-link');

    if (mapModal && closeBtn && mapLinks.length > 0) {
        mapLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                mapModal.classList.add('show');
            });
        });

        closeBtn.addEventListener('click', () => {
            mapModal.classList.remove('show');
        });

        window.addEventListener('click', (e) => {
            if (e.target === mapModal) {
                mapModal.classList.remove('show');
            }
        });
    }

    // Gallery Touch Logic (Mobile B&W toggle)
    const galleryItems = document.querySelectorAll('.wrapper > div');

    // Mobile touch toggle for B&W to Color
    galleryItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            // Remove 'touched' from all other items
            galleryItems.forEach(i => {
                if(i !== this) i.classList.remove('touched')
            });
            // Toggle 'touched' on this item
            this.classList.toggle('touched');
        }, {passive: true});
    });
});
