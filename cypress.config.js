module.exports = {
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/gb3-test-output-[hash].xml',
    toConsole: true,
    attachments: true
  },
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 20000,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
