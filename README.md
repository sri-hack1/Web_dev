# Pinterest Home Page Clone

A responsive, accessible clone of the Pinterest home feed built with **HTML**, **CSS**, and **JavaScript**. The project focuses on layout (masonry-style grid), hover interactions, sticky navigation, and basic search UI behavior—purely on the front end.

---


## Key Features

- Masonry-style feed mimicking Pinterest card layout without external libraries.  
- Responsive design that adapts across desktop, tablet, and mobile breakpoints.  
- Sticky top navigation bar with logo, search field, and action icons.  
- Smooth hover states for pins (save button, overlay, and metadata reveal).  
- Lightweight, framework-free implementation using semantic HTML, modern CSS, and vanilla JS.  

---
## Screenshots

![Home Grid Desktop](https://github.com/sri-hack1/Web_dev/blob/main/assets/Screenshot%202025-09-05%20094131.png)

![Home Grid Desktop](https://github.com/sri-hack1/Web_dev/blob/main/assets/Screenshot%202025-09-05%20094507.png)





## Tech Stack

- HTML5 for semantic structure  
- CSS3 (Flexbox/Grid, transitions) for layout and styling  
- JavaScript (ES6+) for UI behaviors  

No build tools or frameworks are required.

---

## Project Structure
WEB_DEV/
├─ README.md
├─ LICENSE
├─ assets/
│  └─ screenshots/
│     ├─ home-desktop.png
│     ├─ home-tablet.png
│     ├─ home-alt.png
│     └─ home-mobile.png
└─ PinClone/
   ├─ index.html
   ├─ style.css
   ├─ script.js
   └─ Today/
      ├─ today.html
      ├─ today.css
      └─ today.js



---

## Getting Started

1) Clone the repository
```bash
git clone https://github.com/sri-hack1/Web_dev.git
cd pinterest-home-clone
```

2) Open in a browser
- Simply open `index.html` in a modern browser.

Then visit http://localhost:5500

---

## Usage

- Browse the masonry feed.  
- Hover over a pin to see the overlay actions and metadata.  
- Use the search input (UI only by default) to test focus/blur states and sticky header behavior.  

---

## Implementation Notes

- Masonry Layout
  - Option A (CSS-only): Use CSS columns to simulate masonry.  
  - Option B (JS-assisted): Calculate and position cards to avoid column gaps.  
- Images
  - `object-fit` and intrinsic ratio techniques are used for consistent card visuals.  
- Accessibility
  - Semantic HTML, alt text for images, focus styles, and ARIA where appropriate.  
- Performance
  - Optimized images, CSS transitions instead of heavy JS, minimal reflows.

---

## Customization

- Change theme colors in `styles/style.css` under the root variables section.  
- Replace logo and icons in `assets/images/`.  
- Update pin data (titles, images, links) in `index.html` or load from a JSON file via `scripts/app.js`.  

---

## Roadmap

- Add client-side filtering for categories/keywords.  
- Implement infinite scroll (Intersection Observer).  
- Add a “Save” collection UI state and localStorage persistence.  
- Keyboard navigation improvements for full accessibility.

---

## Contributing

Contributions are welcome!  
- Fork the repo  
- Create a feature branch

