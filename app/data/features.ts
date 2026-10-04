export type FeatureType = {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
};

export const features: FeatureType[] = [
    {
        id: 0,
        title: "Каталог площадок",
        description:
            "Просмотр коворкинг-зон с фильтрами: часто встречающийся стек, место работы, область работы.",
        image: "/images/spots/growup-ligovsky.jpg",
        imageAlt: "Коворкинг с рабочими местами — каталог площадок PairWise",
    },
    {
        id: 1,
        title: "Избранное и отзывы",
        description:
            "Сохранение площадок для следующих встреч и список посещённых точек с личным отзывом.",
        image: "/images/spots/sevkabel.jpg",
        imageAlt: "Коворкинг у воды — избранные площадки",
    },
    {
        id: 2,
        title: "Совместные визиты",
        description:
            "Планирование посещения места с другими пользователями в определённый день и время.",
        image: "/images/spots/tochka-kipeniya.jpg",
        imageAlt: "Площадка Точка кипения — совместные встречи",
    },
];
