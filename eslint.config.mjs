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
      "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
      
      // Переносит закрывающую скобку '>' на новую строку и выравнивает её по тегу
      "@stylistic/jsx-closing-bracket-location": ["error", "tag-aligned"],
      
      // Отступы для перенесенных пропсов (4 пробела, как в вашем stylelint)
      "@stylistic/jsx-indent-props": ["error", 4],
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
