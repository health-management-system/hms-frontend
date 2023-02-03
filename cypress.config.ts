import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '7pqr5e',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
