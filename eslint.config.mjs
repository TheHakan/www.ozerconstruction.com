import html from "@html-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    // Global ignores — must be a standalone object with no "files" key
    ignores: [
      // Dependencies
      "node_modules/**",

      // Minified / vendor assets
      "assets/js/*.min.js",
      "assets/js/*.js",
      "assets/css/*.min.css",
      "assets/js/revolution/**",
      "assets/js/revolution-addons/**",
      "assets/css/revolution/**",

      // Auto-generated detail pages (lowercase lang dirs = all detail pages)
      // "en/**",
      // "tr/**",
      // "En/**",

      // Auto-generated pages in uppercase lang dirs
      "AZ/numune-mehsullar/**",
      "AZ/layiheler/**",
      "AZ/bloglar/**",
      "EN/sample-products/**",
      "EN/projects/**",
      "EN/blogs/**",
      "TR/ornek-urunler/**",
      "TR/projeler/**",
      "TR/bloglar/**",
      "RU/obrazcy-produkcii/**",
      "RU/proekty/**",
      "RU/blog/**",

      // Accidental nested dirs created by scripts run from wrong cwd
      "EN/expertice/bending/EN/**",
      "EN/expertice/bending/expertice/**",

      // Static media / upload folders
      "Contents/**",
      "image/**",
      "img/**",
    ],
  },
  {
    // HTML files — linted per-file by the ESLint extension when a file is opened/saved
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
    // JS files
    files: ["**/*.js", "**/*.mjs"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "warn",
    },
  },
];
