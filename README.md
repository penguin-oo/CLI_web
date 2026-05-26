# AI Coding CLI & IDE Portal

A premium, interactive web portal that collects, categorizes, and compares 12 leading AI-powered developer tools as of May 2026. This includes AI-native IDEs (Cursor, Windsurf, Kiro), command-line agents (Claude Code, OpenAI Codex, Aider, OpenCode, AtomCode), and VS Code integrations (Cline, Continue, GitHub Copilot).

## Features

1. **Category Navigation**: Instantly filter between IDEs, Extensions, and CLIs.
2. **Advanced Searching**: Live search by tool name, description, or supported models (e.g. Claude, GPT-5, DeepSeek).
3. **Toggle Filters**: Filter for open-source tools or tools that offer a functional free tier.
4. **Side-by-Side Comparison**: Select up to 4 tools to compare pricing plans, model allowances, registration requirements, installation commands, and active promotional campaigns in a side-by-side layout.
5. **Detail Modals**: Expand any tool card to read installation commands, architecture overviews, and special promotional activities.

## How to Run Locally

Since this is a lightweight, frontend-only application with zero external framework dependencies:
1. Double-click the [index.html](index.html) file to open it directly in your web browser.
2. Alternatively, run a local development server using Python:
   ```bash
   python -m http.server 8000
   ```
   and navigate to `http://localhost:8000`.

## Files Included

- `index.html`: The HTML5 document structure containing SEO tags, page grids, and modal overlays.
- `index.css`: The premium design system utilizing HSL variables, glassmorphic styling, custom glowing effects, and responsive layout grids.
- `app.js`: The application state, reactive filtering triggers, and the complete May 2026 data schema for all 12 tools.

## Deploying to GitHub

Once you authenticate your GitHub CLI locally:
1. Initialize git:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of AI tools directory"
   ```
2. Create repository:
   ```bash
   gh repo create CLI_web --public --source=. --remote=origin --push
   ```
3. Enable GitHub Pages to host the site:
   - Go to your repository settings on GitHub.
   - Go to **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch** and set the branch to `main` (folder `/root`).
   - Save, and your page will be live shortly at `https://<your-username>.github.io/CLI_web/`.
