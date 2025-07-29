import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:prettier/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "eslint:recommended",
      "next",
    ],
    plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      // JavaScript rules
      "prefer-const": "warn",
      "no-var": "warn",
      "no-unused-vars": "warn",
      "object-shorthand": "warn",
      "quote-props": ["warn", "as-needed"],
      // TypeScript rules
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "array",
        },
      ],
      "@typescript-eslint/consistent-type-assertions": [
        "warn",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "never",
        },
      ],
      // React rules
      "react/jsx-fragments": ["warn", "syntax"], // Shorthand syntax for React fragments
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: ["ts", "tsx"],
        },
      ],
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "warn",
    },
  }),
];

export default eslintConfig;
