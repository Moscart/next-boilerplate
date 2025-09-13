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

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
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
    extends: ["next", "next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      // JavaScript/General Rules
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "no-console": ["warn"],
      "prefer-const": ["error"],

      // TypeScript Rules (using built-in Next.js TypeScript config)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": ["warn"],

      // React/Next.js Rules
      "react/prop-types": "off", // Not needed with TypeScript
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react-hooks/exhaustive-deps": ["warn"],
    },
  }),
];

export default eslintConfig;
