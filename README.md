# PairWise

Учебное веб-приложение на Next.js: поиск коворкинг-зон для очных встреч по стеку и интересам.

Карта проекта — в [`PAIRWISE.md`](./PAIRWISE.md). Этот файл — только запуск и структура для разработчиков.

## Стек

- Next.js 16 (App Router)
- React 19, TypeScript
- CSS Modules, Stylelint, ESLint
- шрифт Manrope (`next/font`)

## Запуск

```bash
npm install
npm run dev
```

Приложение: [http://localhost:3000](http://localhost:3000)

## Скрипты

```bash
npm run lint          # ESLint по проекту
npm run lint:tsx      # проверка TS/TSX в app/
npm run lint:tsx:fix
npm run lint:css      # Stylelint
npm run lint:css:fix
npm run build
```

## Где что лежит

| Путь | Назначение |
|---|---|
| `app/page.tsx` | главная (`/`) |
| `app/about/` | о проекте |
| `app/catalog/` | список зон и `catalog/[id]` |
| `app/data/spots.ts` | учебный массив Spot |
| `app/auth/` | вход и регистрация |
| `app/ui/` | компоненты (папка на компонент) |
| `app/globals.css` | токены и `.container` |

Страницы — в `app/*/page.tsx`. Компоненты не кладём рядом с маршрутом, кроме редких `_components`.
