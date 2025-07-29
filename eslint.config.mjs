import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/out/**",
      "**/coverage/**",
      "**/public/**",
      "**/*.config.js",
    ],
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "prettier"],
    plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
    rules: {
      // Style rules
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "prettier/prettier": "warn",

      // JS/TS best practices
      "prefer-const": "warn",
      "no-var": "warn",
      "no-unused-vars": "warn",
      "object-shorthand": "warn",
      "quote-props": ["warn", "as-needed"],

      // TypeScript-specific
      "@typescript-eslint/array-type": ["warn", { default: "array" }],
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
      ],

      // React-specific
      "react/jsx-fragments": ["warn", "syntax"],
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".tsx"] }, // Only .tsx for JSX
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Using TypeScript
    },
  }),
];
