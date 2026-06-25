import { describe, it, expect } from "vitest";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { projects, getProjectBySlug } from "@/data/projects";
import { faqItems } from "@/data/faq";
import { reviews } from "@/data/reviews";
import { team } from "@/data/team";

describe("data layer", () => {
  it("services are validated and non-empty", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("getServiceBySlug returns correct service", () => {
    const service = getServiceBySlug("heating");
    expect(service).toBeDefined();
    expect(service?.slug).toBe("heating");
  });

  it("getServiceBySlug returns undefined for unknown slug", () => {
    expect(getServiceBySlug("unknown")).toBeUndefined();
  });

  it("getAllServiceSlugs returns all slugs", () => {
    const slugs = getAllServiceSlugs();
    expect(slugs).toContain("heating");
    expect(slugs).toContain("water-supply");
    expect(slugs.length).toBe(services.length);
  });

  it("projects are validated and non-empty", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("getProjectBySlug works", () => {
    const project = getProjectBySlug("cottage-novorizhskoe");
    expect(project?.year).toBe(2024);
  });

  it("faqItems are validated", () => {
    expect(faqItems.length).toBeGreaterThan(0);
  });

  it("reviews are validated", () => {
    expect(reviews.length).toBeGreaterThan(0);
    expect(reviews[0].rating).toBeGreaterThanOrEqual(1);
  });

  it("team is validated", () => {
    expect(team.length).toBeGreaterThan(0);
  });
});
