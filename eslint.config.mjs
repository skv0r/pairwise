import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import stylistic from "@stylistic/eslint-plugin"; // Импортируем плагин стилистики

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Настройки для форматирования кода
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // Переносим каждый пропс на новую строку, если их больше одного
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "always" }],
      
      // Переносим первый пропс на новую строку, если элемент разбит на несколько строк
      "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],

      // Переносит закрывающую скобку '>' на новую строку и выравнивает её по тегу
      "@stylistic/jsx-closing-bracket-location": ["error", "tag-aligned"],
      
      // Переносит закрывающий тег (например, </Link>) на новую строку и выравнивает его
      "@stylistic/jsx-closing-tag-location": ["error"],

      // Отступы для перенесенных пропсов (4 пробела)
      "@stylistic/jsx-indent-props": ["error", 4],

      // Отступы для контента внутри JSX (4 пробела), чтобы текст "О нас" сдвигался вправо
      "@stylistic/jsx-indent": ["error", 4],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
