const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add any node event listeners here, if needed
    },
    baseUrl: 'https://to-do-list-umber-nine-34.vercel.app/',

    testIsolation: true,
    defaultCommandTimeout: 40000,
    requestTimeout: 40000,

    // Increased the screen resolution to full HD...
    viewportWidth: 1000,
    viewportHeight: 660,
  },
});
