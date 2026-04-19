# Simple Calculator

A basic, responsive **calculator web app** built with **HTML, CSS, and JavaScript (TypeScript source included)**. It supports common arithmetic operations with a clean UI.

## Demo

- GitHub Pages: https://prashantmore45.github.io/Simple-Calculator/

## Features

- Basic operations: `+`, `-`, `*`, `/`
- Modulo (`%`)
- Parentheses toggle `()`
- Clear (`C`) and backspace
- Responsive layout
- Real-time calculation (no page reload)

## Project Structure

- `index.html` — UI markup
- `style.css` — styling
- `src/app.ts` — TypeScript source
- `dist/app.js` — compiled JavaScript used by `index.html`

## Run Locally

### Option 1: Open directly

1. Clone/download this repo
2. Open `index.html` in your browser

### Option 2: Run with a local server (recommended)

```bash
# from the project root
npx serve
```

Then open the URL printed in your terminal.

## TypeScript (optional)

This repo includes TypeScript (`src/app.ts`). If you want to edit TS and rebuild JS:

```bash
npm install
npx tsc
```

> Ensure `dist/app.js` is updated after compiling.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- TypeScript (dev dependency)

## License

No license specified. If you want, add an MIT License file.