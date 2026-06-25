import { type Review, reviewSchema } from "@/schemas/review";

const rawReviews: Review[] = [
  {
    id: "1",
    name: { ru: "Алексей Петров", en: "Alexey Petrov" },
    role: { ru: "Владелец коттеджа", en: "Cottage Owner" },
    text: {
      ru: "Отличная работа! Систему отопления установили за 2 недели. Всё работает идеально, тепло и комфортно. Рекомендую!",
      en: "Excellent work! The heating system was installed in 2 weeks. Everything works perfectly, warm and comfortable. Highly recommend!",
    },
    rating: 5,
  },
  {
    id: "2",
    name: { ru: "Мария Сидорова", en: "Maria Sidorova" },
    role: { ru: "Управляющая ТСЖ", en: "HOA Manager" },
    text: {
      ru: "Профессиональный подход к проектированию котельной. Все согласования взяли на себя, работа выполнена в срок.",
      en: "Professional approach to boiler room design. They handled all approvals, work completed on time.",
    },
    rating: 5,
  },
  {
    id: "3",
    name: { ru: "Дмитрий Козлов", en: "Dmitry Kozlov" },
    role: { ru: "Владелец дома", en: "Homeowner" },
    text: {
      ru: "Делали тёплые полы и водоснабжение. Качество на высоте, мастера аккуратные и вежливые. Цена адекватная.",
      en: "They did underfloor heating and water supply. Top quality, workers are neat and polite. Fair price.",
    },
    rating: 5,
  },
];

export const reviews: Review[] = rawReviews.map((r) => reviewSchema.parse(r));
