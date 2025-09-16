# Portfolio

Updated features:

* Full-width animated SVG outline navbar spanning entire viewport width.
* Light/Dark mode toggle (state persisted in localStorage) using custom switch.
* Typewriter animation for the name that starts right after preloader finishes.
* Accessible lazy-loaded images (loading="lazy" + decoding="async") and optimized hero image priority.
* Added animated showcase card component (waves) respecting prefers-reduced-motion.
* CSS variables for easy theming and transition smoothing.
* IntersectionObserver-driven reveal animations for service cards, work items, and e-cards.

Performance considerations:

* Defer text animation until loader hidden.
* Avoid layout shift with reserved span width and fixed navbar height.
* Reduced repeated selectors by using variables and compression-friendly rules.
* Local theme persistence prevents FOUC by toggling class early in script.

Further ideas:

* Add aria-current to active nav links on scroll.
* Preload most-used portfolio thumbnails via responsive <link rel="preload" as="image"> tags.
* Generate WebP versions of large JPG assets.