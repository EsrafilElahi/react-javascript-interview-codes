this doc is belong to reza sarari

Total time spent on the project: `24h 10m`

## TOC

1. [How to run the project](#How-to-run-the-project)
2. [Task Definition](#Task-Definition)
3. [Evaluation Criteria](#Evaluation-Criteria)
4. [My Stack of choice](#My-Stack-of-choice)
5. [Design Decisions](#Design-Decisions)
6. [Performance](#Performance)
7. [Improvement Opportunities](#Improvement-Opportunities)

## How to run the project

1. Install dependencies
   - `pnpm install`
2. Run project in dev mode
   - `npm run start`

### 🧪 Running tests

`npm run test`

### 📊 Analyze bundle size

`npm run analyze`

## Task Definition

### Objective:

> Create a Single Page Application (SPA) that showcases your React skills, particularly in hooks, life-cycles, state management, Webpack optimization, and web performance.

- 👉 Pages: it should contain 3 pages.
  - Home 
    - ✅ The Home page should showcase some dynamic content fetched from an API
  like JSONPlaceholder, where users should be able to add, delete, and list items
  (e.g., tasks, notes, etc.).

  - User List Page 
    - ✅ Display a list of users with the following columns: Name, Email, Age, and Actions. 
    - ✅ Pagination: Limit to 10 users per page. 
    - ✅ Sort: Provide sorting options for Name and Age. 
    - ✅ Search: Include a search bar to search users by name. 
  - User Details Page. 
    - ✅ Display detailed information of a selected user: Full Name, Email, Age,Address, and Profile Picture. 
    - ✅ Provide a back button to return to the user list page.
- 👉 Typescript
  - ✅ Ensure the entire application is written using TypeScript.
  - ✅ Utilize strong typing, including interfaces and types wherever necessary.
  - ✅ Implement utility and generic types where appropriate.
- 👉 React Features

  - ✅ Use React hooks effectively (useState, useEffect, useMemo, etc.).
  - ✅ Demonstrate side effects handling with useEffect.
  - ✅ Use React Router for navigation.
  - ✅ Add animations/transitions when navigating between pages

- 👉 State Management: 
    - ✅ Choose a state management strategy or tool (e.g., Context API, Redux, Recoil).
  Implement a theme switcher (light/dark mode) using the chosen state
  management tool.
- 👉 Performance:

  - ✅ Implement code-splitting using React.lazy() and Suspense.
  - ✅ Use useMemo or useCallback where necessary to showcase your ability to
    prevent unnecessary renders or recalculations.
  - ✅ Ensure no render-blocking resources are present.
  - ✅ Optimize images or any assets you use.

- 👉 Webpack:

  - ✅ Customize the Webpack config (You might start with Create React App but eject
    it for customization).
  - ✅ Ensure the final bundle is optimized in size.
  - ✅ Implement tree-shaking if necessary.
  - ✅ Set up Webpack to show a bundle size report.
  - ❌ Server-Side Rendering (Optional but a plus):
  - ❌ Implement server-side rendering for the application to showcase initial load
    performance enhancement.

- 👉 Extras:

  - ✅ Use styled-components or any CSS-in-JS solution of your choice.
  - ✅ Ensure the application is responsive.
  - ✅ Implement error boundaries in the application for better error handling.

- 👉 Documentation:

  - ✅ Include a README.md detailing how to run and build the project, and any design
    decisions you made.
  - ✅ Discuss how you ensured the application's performance and any tools or
    techniques you used.

- 👉 Bonus
  - ✅ Test: Quality and coverage of unit tests
    - only Button and Image component have tests

## Evaluation Criteria

1. Code Quality: Consistent code style, clear namings, modularity, and usage of best
   practices.
2. Functionality: All features should work without errors.
3. Performance: No unnecessary re-renders, efficient data fetching, and optimized asset
   loading.
4. Responsiveness: The application should be fully responsive across devices

## My Stack of choice

- Typescript
- Webpack
- Babel
- React
- Styled-Components
- Zustand

## 🔨 Design Decisions

### 🔶 About Dark Mode Implementation

What is really missing in this puzzle of choices is that the task describe that the dark mode should be applied using the state manager. although what I did is using both the state manager and styled components capabilities. in the mean time the more simple process is just use the `matchMedia` browser API.

we could just add themes like this

```css
[data-theme="light"] {
  --color-bg: #ffffff;
  --color-fg: #000000;
}

[data-theme="dark"] {
  --color-bg: #000000;
  --color-fg: #ffffff;
}
```

and then change the property in our HTML tag

```html
<html lang="en" data-theme="light"></html>
```

and if we needed to check the theme in JS we can just use

```js
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
```

and use localStorage to save the preferred theme.

either way its just a design choice and both implementations works accurately.

### 🔶 Why PocketBase

PocketBase is a self-hosted solution that help create SASS application very fast and easy. in this project we needed something to be able to perform CRUD operations and third-party tools such as JSONPlaceHolder has their limits. such as not allowing to perform many activities in a certain time stamp.

I had previous experience with PocketBase for one of my own projects and I thought that it might help here. and no surprise. it did a lot. I got a free fly.io server and boot up a docker image and set volumes for data consistency and after just 10 minutes I have a fully working backend for my project with no cost.

I had experiences with other Headless CMS ( PocketBase is not a headless CMS ) such as Contentful and Strapi. but I thing it's a total overkill to use a CMS for this app.

### 🔶 Why not Axios ( Or similar HTTP libraries )

I strongly believe in 99.99% percent of projects you don't need such things to handle your HTTP request. such as I did in this project you can simply wrap the fetch in a function and customize it as much as you want. I implement this method in both [Legamart](https://legamart.com) and [Postpace](https://postpace.io) and both working perfectly.

### 🔶 Why Zustand

1. **Simplicity**: Zustand provides a simple and straightforward API based on React hooks, making it easy to learn and use, especially for developers already familiar with React hooks.
2. **Lightweight**: Zustand is a small library with a minimal overhead, which can result in better performance compared to larger state management solutions like Redux.
3. **Easy Integration**: Since Zustand is built around hooks, it seamlessly integrates with React components without requiring extra dependencies or boilerplate code.
4. **No Boilerplate**: Zustand reduces the need for boilerplate code, as it allows you to define your state and update functions with minimal setup.
5. **Centralized State**: Like Redux, Zustand also offers centralized state management, which can help to keep your application's state organized and manageable.
6. **Performance**: Zustand is designed to be lightweight and efficient. It does not introduce unnecessary abstractions or middleware layers, which can result in better overall performance compared to more complex state management solutions like Redux.
7. **Immutability**: Zustand leverages Immer under the hood, which allows you to directly mutate the state in a mutable manner. However, Immer ensures that these mutations are made in an immutable way behind the scenes. This makes it easier to work with state updates and helps prevent accidental state mutations.
8. **TypeScript Support**: Zustand has excellent TypeScript support out of the box. Its API is well-typed, which can help catch type-related errors during development and improve code quality.
9. **Support for React Concurrent Mode**: Zustand is designed to work well with React Concurrent Mode (a.k.a. React Suspense). This allows us to take advantage of React's concurrent rendering capabilities without additional adjustments.
10. **Small Bundle Size**: Due to its simplicity and focused feature set, Zustand contributes to smaller bundle sizes, which is essential for optimizing application performance.

## Performance

1. Using debounce to reduce the api calls to the server
2. Using useMemo to prevent rerendering lists that does not need to rerender
3. Customizing image component and use lazy loading and also forcing the width and height to prevent any CLS
4. Not using unnecessary third-party tools such as axios or lodash to reduce the overhead

## 🔥 Improvement Opportunities

1. Use Linting tools to prevent code mistakes and help new joiners match the code style.
2. We can use Cloudflare image optimization for our image component so we can optimize, resize, decode image on demand. and also we can use implement a backend and use Sharp to optimize images.
3. Adding loading state for table for a better UI
4. Implement Picture implementation for image component and use the responsive methods for images instead of reducing the width ( it can easily be done after cloudflare optimization)
