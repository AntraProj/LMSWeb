# Nx Micro Frontend: Angular Shell with React & Angular Remotes

This project demonstrates a **Micro Frontend (MFE)** architecture using **Nx** and **Module Federation**.  
It features an **Angular Shell (Host)** that integrates:

- a native **Angular Remote**
- a **React Remote** wrapped as a **Web Component**

---

## 📋 Table of Contents
- Features
- Prerequisites
- Installation
- Project Structure
- Running the Application
- Architecture Details
- Common Commands
- Troubleshooting

---

## ✨ Features

- **Host (Shell)**: Angular standalone application acting as the main container.
- **Remote 1 (Angular)**: Standard Angular MFE using the **Adapter Pattern**  
  *(Entry Component → Feature Layout)*.
- **Remote 2 (React)**: React application exposed as a **Web Component**  
  using `@r2wc/react-to-web-component`.
- **Communication**: Cross-framework loading via **Static Module Federation**.

---

## 🛠 Prerequisites

Ensure you have the following installed:

- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **NPM**: v9 or higher
- **Nx CLI** (optional but recommended)

```bash
npm install -g nx
```

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
# or
npm ci
```

---

## 📂 Project Structure

```text
.
├── apps/
│   ├── shell/                # (Angular) Host Application
│   │   ├── module-federation.config.js
│   │   └── src/app/
│   │       └── app.routes.ts
│   │
│   ├── angular/              # (Angular) Remote Application
│   │   ├── module-federation.config.ts
│   │   └── src/app/
│   │       ├── remote-entry/
│   │       └── features/
│   │
│   └── react/                # (React) Remote Application
│       ├── module-federation.config.ts
│       └── src/
│           ├── app/app.tsx
│           └── bootstrap.tsx
│
├── libs/                     # Shared libraries
└── package.json
```

---

## 🚀 Running the Application

### Development Mode (Recommended)

Run the Shell and all Remotes together with HMR:

```bash
npx nx serve shell --devRemotes=angular,react
```

- Shell: http://localhost:4200  
- Angular Remote: http://localhost:4201  
- React Remote: http://localhost:4202  

### Running Individual Apps

```bash
npx nx serve shell
npx nx serve angular
npx nx serve react
```

> ⚠️ The Shell requires all remotes to be running.

---

## 🏗 Architecture Details

### 1. Static Federation (Shell)

The Shell uses **Static Federation** for stability.

`apps/shell/module-federation.config.js`:

```js
remotes: [
  'angular',
  ['react', 'http://localhost:4202/remoteEntry.js']
]
```

---

### 2. Angular Remote (Adapter Pattern)

- **EntryComponent**: Public API for the Shell
- **MainLayout**: Internal layout with its own router-outlet

This prevents duplicated headers/footers.

---

### 3. React Remote (Web Components)

- **Conversion**: `bootstrap.tsx` defines a custom element via `r2wc`
- **Expose**: Module Federation exposes `./web-components`
- **Consume**: Angular Shell loads the script and renders the element

---

## 📜 Common Commands

### Build for Production

```bash
npx nx run-many -t build -p shell angular react --configuration=production
```

### Create a Component in Angular

```bash
nx g @nx/angular:service test  --project=angular
nx g @nx/angular:service test  --project=shell
```

### Create a Service in Angular

```bash
nx g @nx/angular:service data  --project=angular
```

### Run Unit Test for One Remote
```bash
npx nx test shell
npx nx test react
npx nx test angular
```

### Run Unit Test for All Remotes
```bash
npx nx run-many -t test
```

### Add new e2e Test
```bash
npx nx g @nx/cypress:e2e --project=shell-e2e --directory=apps/shell-e2e --devServerTarget=shell:serve
npx nx g @nx/cypress:e2e --project=react-e2e --directory=apps/react-e2e --devServerTarget=react:serve
npx nx g @nx/cypress:e2e --project=angular-e2e --directory=apps/angular-e2e --devServerTarget=angular:serve
```

### Run e2e Test
```bash
npx nx e2e shell-e2e
npx nx e2e react-e2e
npx nx e2e angular-e2e
```

### Create New Remote (don't do it)
```bash
nx g @nx/react:remote some-remote --directory=apps/some-remote --host=shell
```

### Clean Cache

```bash
npx nx reset
```


