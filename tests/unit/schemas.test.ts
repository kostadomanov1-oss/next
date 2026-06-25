import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/schemas/contact-form";
import { serviceSchema } from "@/schemas/service";

describe("contactFormSchema", () => {
  it("validates a correct form submission", () => {
    const result = contactFormSchema.safeParse({
      message: "Нужна консультация по отоплению",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty message", () => {
    const result = contactFormSchema.safeParse({
      message: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("serviceSchema", () => {
  it("validates a minimal service", () => {
    const result = serviceSchema.safeParse({
      slug: "test",
      icon: "Flame",
      image: "https://example.com/test.jpg",
      title: { ru: "Тест", en: "Test" },
      description: { ru: "Описание", en: "Description" },
      longDescription: { ru: "Длинное", en: "Long" },
      features: { ru: ["Фича"], en: ["Feature"] },
      process: [
        {
          title: { ru: "Шаг", en: "Step" },
          description: { ru: "Описание", en: "Description" },
        },
      ],
      faq: [],
      meta: {
        title: { ru: "Мета", en: "Meta" },
        description: { ru: "Описание", en: "Description" },
        keywords: { ru: ["ключ"], en: ["key"] },
      },
      relatedSlugs: [],
    });
    expect(result.success).toBe(true);
  });
});
