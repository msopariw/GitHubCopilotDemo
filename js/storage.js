// storage.js — localStorage wrapper for todo persistence

const STORAGE_KEY = 'copilot-demo-todos';

const TodoStorage = {
    getAll() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    saveAll(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },

    add(todo) {
        const todos = this.getAll();
        todos.push(todo);
        this.saveAll(todos);
        return todos;
    },

    remove(id) {
        const todos = this.getAll().filter(t => t.id !== id);
        this.saveAll(todos);
        return todos;
    },

    toggle(id) {
        const todos = this.getAll().map(t => {
            if (t.id !== id) return t;
            const completed = !t.completed;
            return {
                ...t,
                completed,
                completedAt: completed ? new Date().toISOString() : null
            };
        });
        this.saveAll(todos);
        return todos;
    },

    clearCompleted() {
        const todos = this.getAll().filter(t => !t.completed);
        this.saveAll(todos);
        return todos;
    },

    exportJSON() {
        return JSON.stringify(this.getAll(), null, 2);
    }
};