# Performance Optimizer Skill

This skill analyzes JavaScript and CSS code for performance bottlenecks and provides optimization recommendations specific to this todo application.

## When to Use
- Use when asked to "optimize", "improve performance", or "make faster"
- Use when reviewing rendering logic or DOM manipulation code
- Use when the app feels sluggish or unresponsive

## Performance Patterns for This App

### DOM Manipulation
- **Batch DOM updates**: Build HTML strings and set `innerHTML` once, not per item
- **Avoid layout thrashing**: Read all DOM values before writing
- **Use `documentFragment`** for appending multiple elements
- **Cache selectors**: Store `getElementById` results in variables

### localStorage Optimization
- **Minimize reads/writes**: Read once, mutate in memory, write once
- **Consider debouncing** saves for rapid changes
- **JSON.parse/stringify** are synchronous — keep data small

### Rendering Best Practices
- **Virtual scrolling** for lists with 100+ items
- **Debounce filter changes** to avoid rapid re-renders
- **Use `requestAnimationFrame`** for visual updates
- **Lazy render** only visible items

### CSS Performance
- **Avoid expensive selectors**: No deep nesting (`.a .b .c .d`)
- **Use `transform` and `opacity`** for animations (GPU-accelerated)
- **Minimize reflows**: Avoid animating `width`, `height`, `top`, `left`
- **Use `will-change`** sparingly for animated elements

## Example Optimization
```javascript
// Before: Multiple DOM reads/writes
function renderTodos() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';  // reflow
    todos.forEach(todo => {
        list.innerHTML += createItem(todo);  // reflow per item!
    });
}

// After: Single DOM write
function renderTodos() {
    const list = document.getElementById('todoList');
    const html = todos.map(todo => createItem(todo)).join('');
    list.innerHTML = html;  // single reflow
}
```