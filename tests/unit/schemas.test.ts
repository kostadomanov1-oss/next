import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/schemas/contact-form";
import { serviceSchema } from "@/schemas/service";

describe("contactFormSchema", () => {
  it("validates a correct form submission", () => {
    const result = contactFormSchema.safeParse({
      name: "Иван",
      phone: "+7 495 123 4567",
      email: "ivan@example.com",
      message: "Нужна консультация",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "Иван",
      phone: "+7 495 123 4567",
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short name", () => {
    const result = contactFormSchema.safeParse({
      name: "И",
      phone: "+7 495 123 4567",
      email: "ivan@example.com",
    });
    expect(result.success).toBe(false);
  });
});

describe("serviceSchema", () => {
  it("validates a minimal service", () => {
    const result = serviceSchema.safeParse({
      slug: "test",
      icon: "Flame",
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
