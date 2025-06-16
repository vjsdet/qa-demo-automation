import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "https://demoqa.com",
  },
  testDir: "src/tests",
  expect: { timeout: 120000 },
  timeout: 120000,
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],
});
