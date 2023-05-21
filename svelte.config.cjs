const preprocess = require("svelte-preprocess");

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  parserOptions: {
    allowImportExportEverywhere: true
  }
};

module.exports = config;
