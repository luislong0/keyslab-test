import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://keyslab-test.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
