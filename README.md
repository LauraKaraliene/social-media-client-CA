# Workflow CA

![GitHub Pages](https://github.com/LauraKaraliene/social-media-client-CA/tree/workflow/actions/workflows/pages.yml/badge.svg)

This project aims to improve the quality of an existing social media application by integrating development workflows and a comprehensive testing strategy.
My key tasks involved creating unit tests for the login and logout functionalities and conducting end-to-end tests on the login process to ensure it correctly handles valid credentials and provides clear error messages when necessary.

## Packages Used

Before using the packages below, ensure you have **Node.js** installed on your machine as it is essential for package management and running the npm scripts included in this project.

- **eslint**: Ensures code quality and consistency.
- **prettier**: Formats code to improve readability and consistency.
- **husky**: Manages Git hooks to automate tasks like lint checks before commits.
- **Jest**: Provides a framework for writing and running unit tests.
- **Cypress**: Allows end-to-end testing.
- **Babel**: Transpiles ES6+ JavaScript to backwards compatible versions.
- **Sass**: Enhances CSS with more powerful stylesheets.

## Configuration

- **Commit Hooks**: Husky is used to manage Git hooks. We've configured Husky to run `eslint` and `prettier` on staged files before every commit, ensuring that all committed code adheres to our style guidelines and is free from basic errors.
- **GitHub Actions**: Set up to automate build and deployment tasks, running our test suites on every push and pull request to ensure that changes do not break the existing functionality.

## Scripts

Here are some useful npm commands you can run:

- `npm run build` - Compiles Sass files from `src/scss` to `dist/css`.
- `npm start` - Starts a live server and watches for changes in Sass files, compiling them automatically.
- `npm test` - Runs both unit and end-to-end tests.
- `npm run test-unit` - Executes unit tests using Jest.
- `npm run test-e2e` - Opens the Cypress UI for interactive end-to-end testing.
- `npm run test-e2e-report` - Runs Cypress end-to-end tests and generates a report using the Mochawesome reporter.
- `npm run test-e2e-cli` - Executes end-to-end tests using Cypress in the command line.
- `npm run format` - Formats JavaScript files in the `src` directory using Prettier.
- `npm run prepare` - Installs Husky to manage Git hooks, enhancing workflows with automated actions.

## Getting Started

1. Clone the repository:

```
git clone https://github.com/LauraKaraliene/social-media-client-CA
```

2. Switch to the cloned directory and and change to the correct branch:

```
cd social-media-client-CA
```

```
git checkout workflow
```

3. Install Sass globally. This allows you to use Sass commands directly in your terminal:

```
npm install -g sass
```

4. Install all dependencies:

```
npm install
```

5. Build the project.
   Before starting the server, compile the initial CSS from Sass. This converts your Sass files into CSS files in the `dist/css` directory:

```
npm run build
```

6. Launch the development server and to start watching for any changes in your Sass files:

```
npm start
```

7. Run Unit Tests. This command executes the Jest testing framework to run tests that check the individual parts of your application for correct operation.

```
npm test-unit
```

8. Run End-to-End Tests. This command will open the Cypress Test Runner, where you can watch the tests run in a real browser.

```
npm run test-e2e

```

## Troubleshooting

If you encounter issues during installation or running scripts, here are a few common solutions:

- **npm install errors**: Make sure your Node.js and npm are up to date. Try cleaning your npm cache with `npm cache clean --force` and reinstall the dependencies.
- **Sass compilation fails**: Ensure Sass is correctly installed globally, or run `npm install sass` locally within the project.
- **Cypress not opening**: Check that Cypress is installed globally or run `npm install cypress` if you prefer a local installation. Also, ensure your system meets the Cypress requirements.
- \*\*ESLint Errors: If ESLint throws errors for files that don’t seem to require changes, check the .eslintrc.js configuration for rules that might be incorrectly set up or too strict.
