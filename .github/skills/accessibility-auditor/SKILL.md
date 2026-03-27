# Accessibility Auditor Skill

This skill audits web applications for accessibility (a11y) compliance and provides actionable recommendations following WCAG 2.1 guidelines.

## When to Use
- Use when reviewing HTML/CSS files for accessibility issues
- Use when asked to "check accessibility", "audit a11y", or "make accessible"
- Use when adding new UI components to ensure they meet WCAG standards

## Audit Checklist

### Semantic HTML
- Use proper heading hierarchy (`h1` > `h2` > `h3`, no skipped levels)
- Use `<button>` for clickable actions, not `<div>` or `<span>`
- Use `<nav>`, `<main>`, `<section>`, `<article>` for page structure
- Form inputs must have associated `<label>` elements

### ARIA Attributes
- Add `aria-label` to icon-only buttons
- Use `role="status"` for live-updating counters
- Add `aria-live="polite"` to dynamic content areas
- Use `aria-checked` for custom checkboxes

### Keyboard Navigation
- All interactive elements must be focusable (`tabindex="0"` if needed)
- Focus order must be logical (follows DOM order)
- Visible focus indicators required (never use `outline: none` without replacement)
- Support Enter and Space for button activation

### Color & Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 for large text (18px+ or 14px bold)
- Never use color alone to convey meaning (add icons/text)
- Ensure focus indicators have 3:1 contrast against background

### Common Fixes for This Project
```html
<!-- Add aria-label to delete buttons -->
<button class="delete-btn" aria-label="Delete todo item">✕</button>

<!-- Add role to todo list -->
<ul id="todoList" class="todo-list" role="list" aria-label="Todo items">

<!-- Add role to stats -->
<div class="stats" role="status" aria-live="polite">

<!-- Add aria-checked to checkboxes -->
<div class="todo-checkbox" role="checkbox" aria-checked="false" tabindex="0">
```

## Output Format
When auditing, provide:
1. **Issue**: What the problem is
2. **Impact**: Who is affected (screen readers, keyboard users, etc.)
3. **Fix**: Specific code change to resolve it
4. **WCAG Criterion**: Which guideline applies (e.g., 1.3.1 Info and Relationships)