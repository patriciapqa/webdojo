const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rjo7ca',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    video: true,
    baseUrl: 'http://localhost:3000'
    
  },
});
