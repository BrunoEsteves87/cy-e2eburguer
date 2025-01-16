const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://e2eburguer.netlify.app',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
