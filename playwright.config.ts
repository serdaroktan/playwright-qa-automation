import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  reporter: 'html',

  use: {

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    headless: true,

  },

});