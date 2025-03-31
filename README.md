# React + Tailwind CSS + Vite Setup Guide

This guide walks you through setting up a new React project with Tailwind CSS using Vite as the build tool.

## Quick Start

```bash
# Create a new project with Vite
npm create vite@latest my-project -- --template react
cd my-project

# Install dependencies
npm install

# Install Tailwind CSS and its dependencies
npm install -D tailwindcss postcss autoprefixer

# Generate Tailwind configuration files
npx tailwindcss init -p
```

## Configuration Files

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
```

## Add Tailwind Directives

Create or update your CSS file (src/index.css):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure to import this CSS file in your main entry point (src/main.jsx):

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## Verify Installation

Update your App.jsx to test Tailwind classes:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          React + Tailwind CSS + Vite
        </h1>
        <p className="text-gray-600">
          Your setup is working correctly if this text is styled!
        </p>
      </div>
    </div>
  );
}

export default App;
```

## Start Development Server

```bash
npm run dev
```

Visit the URL shown in your terminal (usually http://localhost:5173/) to see your application running with Tailwind CSS.

## Troubleshooting

- **Tailwind classes not applying?** Double-check your postcss.config.js and make sure the plugin name is 'tailwindcss', not '@tailwindcss/postcss'.
- **Build issues?** Ensure all dependencies are installed correctly.
- **TypeScript support?** For TypeScript projects, make sure to use the proper file extensions in the content array of tailwind.config.js.

## Optional Enhancements

### Add Prettier plugin for Tailwind CSS
```bash
npm install -D prettier prettier-plugin-tailwindcss
```

### Create a prettier.config.js file
```javascript
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

This helps automatically sort your Tailwind CSS classes in the recommended order.
