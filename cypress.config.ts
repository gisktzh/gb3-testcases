import {defineConfig} from 'cypress';

export default defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/gb3-test-output-[hash].xml',
    toConsole: true,
    attachments: true
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
