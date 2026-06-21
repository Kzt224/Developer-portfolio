# Developer Portfolio

A modern, production-ready developer portfolio built with React, Tailwind CSS v4, and shadcn-style UI components. Features dark/light mode, responsive layout, and accessible sections (Hero, About, Projects, Experience, Skills, Contact, Footer).

## Project Structure

```
src/
├── components/           # Page sections & shared UI
│   ├── ui/               # shadcn-style primitives (Button, Card, Badge, Avatar, Tabs, Tooltip)
│   ├── Header.jsx        # Sticky nav + theme toggle + mobile menu
│   ├── ThemeToggle.jsx   # Dark/light mode switch
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.js   # Theme state, localStorage sync, system preference
├── data/                 # Example content (replace with your own)
│   ├── site.js
│   ├── projects.js
│   ├── experience.js
│   └── skills.js
├── lib/
│   └── utils.js         # cn() for class merging
├── App.js
├── index.js
└── index.css            # Tailwind + @theme + @custom-variant dark
```

## Design & Architecture

- **Design direction**: Minimal, developer-focused. Inspired by Vercel, Linear, and shadcn/ui — clean typography (Inter), zinc palette, subtle borders, and restrained hover states.
- **Theme**: Dark/light toggle via `.dark` on `<html>`. CSS variables in `@theme` and `.dark` override for backgrounds, text, borders. Inline script in `index.html` prevents flash; `ThemeContext` syncs with `localStorage` and `prefers-color-scheme`.
- **UI**: Radix primitives (Slot, Tabs, Tooltip, Avatar) for accessibility; CVA + `cn()` for variants and class merging. All interactive elements are keyboard-friendly and use ARIA where needed.
- **Layout**: Mobile-first. Sticky header with desktop nav and hamburger menu on small screens. Sections use `scroll-mt-20` for anchor links. Max-width containers (`max-w-3xl` / `max-w-4xl`) for readability.

## Customization

Edit `src/data/site.js`, `projects.js`, `experience.js`, and `skills.js` with your name, bio, projects, experience, and skills. Update social links and avatar in `site.js`. Replace project images with your own or keep Unsplash placeholders.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
