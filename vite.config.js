const path = require("path");

const isLibMode = process.argv.includes("--mode=lib");

module.exports = {
  build: {
    ...(isLibMode
      ? {
          lib: {
            entry: path.resolve(__dirname, "lib/index.js"),
            name: "cool-visual-components",
            formats: ["es", "umd"],
            fileName: (format) => `cool-visual-components.${format}.js`,
          },
        }
      : {}),
    rollupOptions: {
      ...(!isLibMode
        ? {
            input: {
              app: path.resolve(__dirname, "index.html"),
            },
          }
        : {
            output: {
              assetFileNames: "cool-visual-components.css",
            },
          }),
    },
    outDir: isLibMode ? "dist/lib" : "dist/app",
  },
};
