# Next.js Boilerplate

A modern, well-configured Next.js boilerplate with TypeScript, Tailwind CSS, and development tools pre-configured for rapid development.

## 🚀 Features

- **Next.js 15.4.4** with App Router
- **React 19.1.0** with latest features
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with PostCSS integration
- **ESLint** with Next.js, TypeScript, and Prettier configurations
- **Prettier** with Tailwind CSS plugin for consistent code formatting
- **Husky** for Git hooks
- **lint-staged** for pre-commit linting
- **Geist Font** optimized loading
- **Turbo Mode** for faster development

## 📦 Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9 with Next.js, TypeScript, and Prettier configs
- **Formatting**: Prettier with Tailwind CSS plugin
- **Git Hooks**: Husky + lint-staged
- **Package Manager**: pnpm

## 🛠️ Prerequisites

- Node.js 18+
- pnpm (recommended) / npm / yarn / bun

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd next-boilerplate
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `pnpm dev`            | Start development server with Turbo mode |
| `pnpm build`          | Build the application for production     |
| `pnpm start`          | Start the production server              |
| `pnpm lint`           | Run ESLint to check for issues           |
| `pnpm lint:fix`       | Run ESLint and fix auto-fixable issues   |
| `pnpm prettier`       | Format all files with Prettier           |
| `pnpm prettier:check` | Check if files are formatted correctly   |

## 🔧 Configuration

### ESLint Configuration

- Extends Next.js, TypeScript, and Prettier configurations
- Custom rules for semicolons, quotes, arrow functions, and template literals
- Ignores build directories, node_modules, and public assets

### Prettier Configuration

- Semicolons enabled
- Double quotes
- 2-space indentation
- 100 character line width
- Tailwind CSS class sorting

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- Next.js plugin included
- Modern ES2017 target

### Git Hooks

- **Pre-commit**: Runs lint-staged to lint and format staged files
- **Pre-push**: Runs build to ensure the project compiles

## 📁 Project Structure

```
next-boilerplate/
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/               # App Router directory
│       ├── favicon.ico    # App favicon
│       ├── globals.css    # Global styles with Tailwind
│       ├── layout.tsx     # Root layout component
│       └── page.tsx       # Home page component
├── .husky/               # Git hooks
├── .lintstagedrc        # lint-staged configuration
├── .prettierrc.json     # Prettier configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## 🎨 Styling

This boilerplate uses **Tailwind CSS 4** with:

- Custom CSS variables for theming
- Dark mode support
- Geist Sans and Geist Mono fonts
- PostCSS for processing

## 🔍 Code Quality

### Pre-commit Hooks

The project automatically runs the following on staged files before each commit:

- **JavaScript/TypeScript files**: Prettier formatting → ESLint fixing → ESLint checking
- **JSON/CSS/Markdown files**: Prettier formatting

### Pre-push Hooks

- Runs `pnpm build` to ensure the project compiles successfully

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure the build
3. Your app will be deployed with every push to the main branch

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Render

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - typed JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
