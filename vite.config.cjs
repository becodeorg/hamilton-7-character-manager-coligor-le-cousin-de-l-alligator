const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        new: "./newCharacter.html",
        view: "./viewCharacter.html",
        edit: "./editCharacter.html",
      },
    },
  },
});