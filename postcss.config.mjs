const config = {
  plugins: ["@tailwindcss/postcss"],
  autoprefixer: {
    overrideBrowserslist: [
      "last 2 versions",
      "> 1%",
      "not ie <= 8",
    ],
  },
};

export default config;
