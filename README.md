
# Cypress/Postman tests for Gb3

## Getting Started

Download and install Node.js and npm from https://nodejs.org/.
Verify the installation by running the following commands in your command prompt or terminal:

```bash
node --version
npm --version
```

Download and install Git from https://git-scm.com/.
Verify the installation by running the following command:

```bash
git --version
```
## Build and Test

Open your command prompt or terminal.

Install Cypress using npm:

```bash
npm i
```
Now that Cypress is installed, you can run your tests using the following steps:


### Launch Cypress using the following command:

```bash
npx cypress open
```
This will open the Cypress Test Runner. Click on a test file to run the tests in that file or click "Run all specs" to run all tests.

### Headless Mode
If you prefer to run Cypress tests in headless mode (without the graphical Test Runner), you can use the following command:

```bash
npx cypress run
```

### Modify base URL to test in different environments

Open cypress.config.ts and modify **const gb3BaseUrl**