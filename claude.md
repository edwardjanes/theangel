# TheAngel Website - GitHub Pages Migration

## Project Overview
Recreating the TheAngel.app website from WordPress to static HTML/CSS/JS hosted on GitHub Pages.

**Reference Site:** https://theangel.app

## Design Specifications

### Color Palette
- **Primary:** Black (#000000), White (#FFFFFF)
- **Accent:** Pink/Magenta (primary CTA color)
- **Secondary:** Green (#10b981 - positive indicators), Blue (#2563eb - secondary CTAs)
- **Tertiary:** Gold (#FFD700 - crypto asset displays)

### Typography
- **Font Stack:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Font Sizes:** 12px (small) to 48px (heading)
- **Weight:** Varies for hierarchy (regular, 500, 600, 700)

### Styling Approach
- **CSS:** Inline styles and CSS files (no Tailwind, no CSS modules)
- **Responsive:** Mobile-first design with media queries for tablet/desktop

## Navigation Structure

### Main Nav
- Home
- Investors
- Founders
- Company
- Docs

### Footer Nav
- How it Works
- FAQs
- Legal/Corporate pages

## Key Sections

### 1. Hero Section
- Tagline: "Invest in the Best Startups Across the Globe"
- Emphasis: Speed ("60 seconds") and accessibility
- CTAs: Sign In / Sign Up

### 2. Platform Statistics
- "$10M Assets on Platform"
- "100+ Countries Supported"

### 3. Asset Trading Table
- Interactive crypto/token marketplace
- Assets: $ANGEL, $EJABY, etc.
- Shows: Price, price charts, trading functionality
- Color-coded: Green (positive), Gold (crypto)

### 4. Educational Content
- "Learn the Basics" section
- Covers tokenization fundamentals
- Benefits for investors and founders

### 5. User Engagement
- Email capture forms (investor packs)
- Modal popups
- Sign In/Sign Up flows

## Technical Stack

- **Hosting:** GitHub Pages
- **Architecture:** Static site (HTML/CSS/JS)
- **Charts:** Chart.js (for price/asset visualization)
- **Analytics:** Google Analytics integration
- **Responsive Design:** CSS media queries (no framework)

## Project Structure (To Create)

```
TheAngel/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── trading-table.js
│   └── modals.js
├── assets/
│   ├── images/
│   └── icons/
├── .gitignore
└── README.md
```

## Development Guidelines

1. **No CSS frameworks** - Use inline styles and custom CSS only
2. **Mobile-first** - Design for mobile, enhance for larger screens
3. **Semantic HTML** - Use proper HTML structure
4. **Accessibility** - ARIA labels, semantic elements, keyboard navigation
5. **Performance** - Minimize external dependencies
6. **Git workflow** - Commit meaningful changes with descriptive messages

## Deployment

- Push to GitHub repo with GitHub Pages enabled
- Site will be available at: `https://theangel-github-username.github.io/`

## Next Steps

1. Set up GitHub repo structure
2. Create base HTML template with navigation
3. Implement hero section
4. Build asset trading table component
5. Add educational content sections
6. Implement modals and forms
7. Add responsive design
8. Integrate Google Analytics