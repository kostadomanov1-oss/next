import { describe, it, expect } from "vitest";
import { createMetadata } from "@/lib/metadata";

describe("createMetadata", () => {
  it("generates correct metadata for ru locale", () => {
    const meta = createMetadata({
      title: "Test Title",
      description: "Test description",
      path: "/services",
      locale: "ru",
    });

    expect(meta.title).toBe("Test Title");
    expect(meta.description).toBe("Test description");
    expect(meta.alternates?.canonical).toBe(
      "https://gidroteplo.vercel.app/services",
    );
    expect(meta.robots).toEqual({ index: true, follow: true });
  });

  it("generates correct canonical for en locale", () => {
    const meta = createMetadata({
      title: "Test",
      description: "Test",
      path: "/about",
      locale: "en",
    });

    expect(meta.alternates?.canonical).toBe(
      "https://gidroteplo.vercel.app/en/about",
    );
  });

  it("respects noIndex flag", () => {
    const meta = createMetadata({
      title: "Private",
      description: "Private",
      path: "/privacy",
      locale: "ru",
      noIndex: true,
    });

    expect(meta.robots).toEqual({ index: false, follow: false });
  });
});
