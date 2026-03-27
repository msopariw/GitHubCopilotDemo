---
applyTo: "**"
---

# Project Custom Instructions

This is a simple Todo application used to demonstrate GitHub Copilot features.

## Tech Stack
- **Frontend**: Vanilla HTML, CSS, JavaScript (no frameworks)
- **Storage**: Browser localStorage
- **Architecture**: Simple MVC-like separation (storage.js = Model, app.js = Controller, index.html = View)

## Code Style Rules
- Use `const` and `let` — never `var`
- Use arrow functions for callbacks and anonymous functions
- Use template literals for string interpolation
- Always sanitize user input before rendering (use `escapeHtml()`)
- Use descriptive function names in camelCase
- CSS class names use kebab-case
- Add JSDoc comments to all public functions

## Project Conventions
- Storage operations go in `js/storage.js`
- UI logic and event handling go in `js/app.js`
- All styles go in `css/styles.css`
- Color scheme follows GitHub's dark theme palette
- Priority levels: low, medium, high
- Todo IDs are timestamp-based strings

## Security
- Always escape HTML output to prevent XSS
- Never use `eval()` or `innerHTML` with unescaped user data
- Validate inputs before processing