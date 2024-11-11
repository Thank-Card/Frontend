const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@img": path.resolve(__dirname, "src/assets/img/"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
    },
  },
};
