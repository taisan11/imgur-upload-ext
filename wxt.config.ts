import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  manifest:{
    name: "Upload Imgur!!",
    description: "Upload image to Imgur",
    version: "1.0.0",
    author:{email:""},
    permissions:["storage","clipboardWrite"]
  },
  modules: ['@wxt-dev/auto-icons'],
});
