module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  ignorePatterns: ["node_modules", "dist", "vite.config.ts", ".eslintrc.cjs", "tests/*", "plopfile.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": ["warn", {allowConstantExport: true}],
    "no-console": "warn",
    "import/no-default-export": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "padding-line-between-statements": [
      "warn",
      {blankLine: "always", prev: "*", next: ["return", "export"]},
      {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}
    ],
    "import/order": [
      "warn",
      {
        groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after"
          }
        ],
        "newlines-between": "always"
      }
    ]
  }
};
