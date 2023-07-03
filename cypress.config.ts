import {defineConfig} from 'cypress';
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
const gb3BaseUrl = 'https://calm-plant-0ecbec603.2.azurestaticapps.net/';

export default defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/gb3-test-output-[hash].xml',
    toConsole: true,
    attachments: true
  },
  video: false,
  env: {
    /*
     *  If you want to run the tests locally please copy the cypress.env.json.example file
     * and rename it to cypress.env.json. Every env var you add to the new file will overwrite the value here.
     * So e.g. copy the username and password env vars and add the credentials you want to use for the local tests.
     * (Don't worry, the cypress.env.json fill will not be committed as it is added to the .gitignore file)
     */
    gb3BaseUrl: gb3BaseUrl,
    eIAM_username: '#{EIAM.Username}#', //keep this naming pattern as username and password will be replaced in the pipeline
    eIAM_password: '#{EIAM.Password}#'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config);
    }
  }
});
