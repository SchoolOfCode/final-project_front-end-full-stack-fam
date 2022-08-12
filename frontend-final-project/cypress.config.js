const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jungle-sum.netlify.app",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    experimentalSessionAndOrigin: true
  },

  failOnStatusCode: false
  
});
