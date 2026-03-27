// app.js — Main application logic

let currentFilter = 'all';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderTodos();

    document.getElementById('todoInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const priority = document.getElementById('prioritySelect').value;
    const text = input.value.trim();

    if (!text) return;

    const todo = {
        id: Date.now().toString(),
        text: text,
        completed: false,
        priority: priority,
        createdAt: new Date().toISOString()
    };

    TodoStorage.add(todo);
    input.value = '';
    renderTodos();
}

function toggleTodo(id) {
    TodoStorage.toggle(id);
    renderTodos();
}

function deleteTodo(id) {
    TodoStorage.remove(id);
    renderTodos();
}

function clearCompleted() {
    TodoStorage.clearCompleted();
    renderTodos();
}

function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });
    renderTodos();
}

function exportTodos() {
    const json = TodoStorage.exportJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todos.json';
    a.click();
    URL.revokeObjectURL(url);
}

function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
}

function renderTodos() {
    const todos = TodoStorage.getAll();
    const list = document.getElementById('todoList');

    // Apply filter
    const filtered = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true;
    });

    // Update stats
    const active = todos.filter(t => !t.completed).length;
    const completed = todos.filter(t => t.completed).length;
    document.getElementById('totalCount').textContent = `${todos.length} total`;
    document.getElementById('activeCount').textContent = `${active} active`;
    document.getElementById('completedCount').textContent = `${completed} completed`;

    // Render list
    if (filtered.length === 0) {
        list.innerHTML = '<li class="empty-state">No todos to show ✨</li>';
        return;
    }

    list.innerHTML = filtered.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}">
            <div class="todo-checkbox" onclick="toggleTodo('${todo.id}')"></div>
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <span class="priority-badge priority-${todo.priority}">${todo.priority}</span>
            <span class="todo-date">${formatDate(todo.createdAt)}</span>
            <button class="delete-btn" onclick="deleteTodo('${todo.id}')" title="Delete">✕</button>
        </li>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}