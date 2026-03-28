# 📝 Todo App — GitHub Copilot Features Demo

A simple todo application built with vanilla HTML, CSS, and JavaScript using browser localStorage. Designed as a demo workspace to showcase GitHub Copilot's customization features.

New LIne inserted

## Quick Start

Open `index.html` in a browser — no build tools or server required.

## Project Structure

```
GitHubCopilotDemo/
├── index.html                              # Main app page (View)
├── css/styles.css                          # Styles (GitHub dark theme)
├── js/
│   ├── app.js                              # UI logic & event handling (Controller)
│   └── storage.js                          # localStorage wrapper (Model)
├── .github/
│   ├── copilot-instructions.md             # ⭐ Custom Instructions
│   ├── instructions/
│   │   ├── javascript.instructions.md      # JS-specific instructions
│   │   └── css.instructions.md             # CSS-specific instructions
│   ├── skills/
│   │   ├── accessibility-auditor/SKILL.md  # ⭐ Custom Skill: a11y audit
│   │   └── performance-optimizer/SKILL.md  # ⭐ Custom Skill: perf tips
│   └── agents/
│       ├── code-reviewer.agent.md          # ⭐ Custom Agent: code review
│       └── doc-writer.agent.md             # ⭐ Custom Agent: documentation
├── .vscode/
│   └── mcp.json                            # ⭐ MCP Server configuration
└── README.md
```

---

## Copilot Features Demo Guide

### 1. Custom Instructions

**Files**: `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md`

Custom instructions automatically guide Copilot to follow your project's coding conventions. They apply to every Copilot interaction in this workspace.

**How to demo:**
- Open any `.js` file and ask Copilot to write a new function — it will use `const`/`let`, arrow functions, JSDoc comments, and camelCase naming
- Ask Copilot to add a CSS feature — it will follow the GitHub dark theme palette
- The `applyTo` front matter targets instructions to specific file types

**Try these prompts:**
- "Add a function to sort todos by priority"
- "Add a due date field to the todo form"
- "Add dark/light theme toggle styles"

---

### 2. Custom Skills

**Files**: `.github/skills/accessibility-auditor/SKILL.md`, `.github/skills/performance-optimizer/SKILL.md`

Skills provide domain-specific expertise that Copilot loads when relevant. They contain checklists, patterns, and code examples.

**How to demo:**
- Ask Copilot to audit the app for accessibility issues — it loads the a11y skill
- Ask Copilot to optimize the rendering performance — it loads the perf skill

**Try these prompts:**
- "Audit index.html for accessibility issues"
- "How can I optimize the rendering in app.js?"
- "Check the todo list for WCAG compliance"

---

### 3. Custom Agents

**Files**: `.github/agents/code-reviewer.agent.md`, `.github/agents/doc-writer.agent.md`

Custom agents are specialized Copilot personas with defined tools and workflows. Invoke them with `@agent-name` in chat.

**How to demo:**
- Use `@code-reviewer` to review app.js for security and quality issues
- Use `@doc-writer` to generate JSDoc comments or a changelog

**Try these prompts:**
- `@code-reviewer review js/app.js`
- `@code-reviewer check for security issues in the rendering code`
- `@doc-writer generate JSDoc for all functions in storage.js`
- `@doc-writer create a changelog for this project`

---

### 4. MCP Integration

**File**: `.vscode/mcp.json`

Model Context Protocol (MCP) servers extend Copilot's capabilities by connecting it to external tools and data sources.

**Configured MCP servers:**
| Server | Purpose |
|--------|--------|
| `filesystem` | Read/write files in the workspace |
| `github` | Interact with GitHub repos, issues, PRs |
| `fetch` | Fetch content from web URLs |

**How to demo:**
- Show the `.vscode/mcp.json` configuration file
- Explain how MCP servers give Copilot access to external tools
- Demonstrate filesystem operations or GitHub API access through Copilot

**Try these prompts:**
- "List all JavaScript files in the project"
- "Fetch the latest WCAG guidelines summary"
- "Create a GitHub issue for adding dark mode support"

---

## App Features

| Feature | Description |
|---------|-------------|
| Add todos | Type text, pick priority (low/medium/high), press Enter or click Add |
| Complete | Click the circle checkbox to toggle completion |
| Delete | Hover over a todo and click ✕ |
| Filter | Switch between All / Active / Completed views |
| Stats | Live count of total, active, and completed items |
| Export | Download all todos as a JSON file |
| Persist | All data saved to localStorage automatically |
