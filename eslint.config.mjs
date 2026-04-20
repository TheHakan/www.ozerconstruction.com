import html from "@html-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    // Apply to all HTML files — only Prettier formatting issues
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html,
      prettier: prettierPlugin,
    },
    language: "@html-eslint/html",
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "warn",
    },
  },
  {
    // Apply to JS files
    files: ["**/*.js", "**/*.mjs"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "warn",
    },
  },
  {
    // Ignore minified/generated files
    ignores: [
      "node_modules/**",
      "assets/js/*.min.js",
      "assets/js/revolution/**",
      "assets/js/revolution-addons/**",
    ],
  },
];
