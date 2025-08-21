# Copilot Instructions for AI Coding Agents

## Project Overview
This is a client-side tip calculator web application. The codebase is organized for clarity and maintainability, with separate folders for HTML, CSS, JavaScript, and assets.

## Architecture & Major Components
- **HTML Files**: `index.html` and `tip_calc.html` are entry points. They structure the UI and reference assets.
- **CSS**: All styles are in `assets/css/main.css`. The `style-guide.md` documents design conventions.
- **JavaScript**: Core logic is in `assets/js/main.js`. This file handles user input, tip calculation, and DOM updates.
- **Assets**: Icons and images are stored in `assets/icon/` and `assets/img/` respectively.

## Developer Workflows
- No build system or package manager is present; all files are static and can be served directly.
- For local development, open `index.html` or `tip_calc.html` in a browser. No special commands are required.
- Debugging is done using browser dev tools (console, inspector).

## Project-Specific Conventions
- **CSS**: Follows BEM-like class naming for maintainability. Refer to `style-guide.md` for design rules.
- **JavaScript**: All logic is in a single file (`main.js`). Functions are organized by UI event (e.g., input change, button click).
- **HTML**: Uses semantic elements and links to assets via relative paths.
- **Assets**: SVGs and PNGs are used for icons and branding. Keep asset references up-to-date in HTML and CSS.

## Integration Points
- No external dependencies or frameworks are used. All code is vanilla HTML/CSS/JS.
- Ensure cross-file references (e.g., linking CSS/JS in HTML) use correct relative paths.

## Examples
- To update tip calculation logic, edit `assets/js/main.js`.
- To change styles, modify `assets/css/main.css` and consult `style-guide.md`.
- To add a new icon, place it in `assets/icon/` and reference it in HTML/CSS.

## Key Files & Directories
- `index.html`, `tip_calc.html`: Main UI files
- `assets/css/main.css`: Styles
- `assets/css/style-guide.md`: Design conventions
- `assets/js/main.js`: Application logic
- `assets/icon/`, `assets/img/`: Visual assets

---
For questions or unclear conventions, ask for clarification or review `style-guide.md` for design details.
