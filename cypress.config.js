const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  //defaultCommandTimeout: 4000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      reportDir: "cypress/results",
      charts: true,
      reportPageTitle: 'HomePagee',
      overwrite: false,
      html: true,
      ignoreVideos: false
  },
  video: true,
  screenshotOnRunFailure: true,
  chromeWebSecurity: false,
 // ensureScrollable: false,
 env:{
  baseurl: "https://www.demoblaze.com"
 },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

        on('before:run', async (details) => {
          console.log('override before:run');
          await beforeRunHook(details);
        });
  
        on('after:run', async () => {
          console.log('override after:run');
          await afterRunHook();
        });
      },
   
    specPattern: 'cypress/Integration2/*.cy.{js,jsx,ts,tsx}' // scan & extract any files under this folder
  },
});
