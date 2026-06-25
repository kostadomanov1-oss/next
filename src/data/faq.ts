import { type FaqItem, faqItemSchema } from "@/schemas/faq";

const rawFaqItems: FaqItem[] = [
  {
    id: "1",
    question: {
      ru: "Сколько стоит монтаж системы отопления?",
      en: "How much does a heating system installation cost?",
    },
    answer: {
      ru: "Стоимость зависит от площади помещения, типа системы и выбранного оборудования. Для дома 100-150 м² стоимость начинается от 150 000 ₽. Мы предоставляем бесплатный выезд и расчёт.",
      en: "The cost depends on the room area, system type and equipment chosen. For a 100-150 m² house, prices start from 150,000 ₽. We provide free site visits and estimates.",
    },
    category: "pricing",
  },
  {
    id: "2",
    question: {
      ru: "Какие гарантии вы предоставляете?",
      en: "What warranties do you provide?",
    },
    answer: {
      ru: "Мы предоставляем гарантию 5 лет на все виды монтажных работ и 1-2 года на оборудование (в зависимости от производителя). Также предлагаем расширенное сервисное обслуживание.",
      en: "We provide a 5-year warranty on all installation work and 1-2 years on equipment (depending on the manufacturer). We also offer extended service maintenance.",
    },
    category: "warranty",
  },
  {
    id: "3",
    question: {
      ru: "Работаете ли вы за пределами Москвы?",
      en: "Do you work outside Moscow?",
    },
    answer: {
      ru: "Да, мы работаем по всей Московской области. Для объектов за пределами МО — свяжитесь с нами для уточнения условий.",
      en: "Yes, we work throughout the Moscow Region. For properties outside the Moscow Region, contact us to discuss terms.",
    },
    category: "general",
  },
  {
    id: "4",
    question: {
      ru: "Сколько времени занимает монтаж?",
      en: "How long does installation take?",
    },
    answer: {
      ru: "Сроки зависят от объёма работ. Монтаж отопления в доме 100-200 м² — от 5 до 14 дней. Комплексный монтаж всех систем — от 30 до 60 дней.",
      en: "Timelines depend on the scope of work. Heating installation in a 100-200 m² house takes 5 to 14 days. Complete system installation — 30 to 60 days.",
    },
    category: "timeline",
  },
  {
    id: "5",
    question: {
      ru: "Нужно ли мне закупать материалы самостоятельно?",
      en: "Do I need to purchase materials myself?",
    },
    answer: {
      ru: "Нет, мы берём на себя закупку всех материалов и оборудования по дилерским ценам. Вы экономите время и деньги.",
      en: "No, we handle the purchase of all materials and equipment at dealer prices. You save time and money.",
    },
    category: "general",
  },
];

export const faqItems: FaqItem[] = rawFaqItems.map((f) =>
  faqItemSchema.parse(f),
);
