import { describe, expect, it } from "vitest";

import { caseStudies } from "./CaseStudies";

describe("CaseStudies", () => {
  it("expose quatre cas documentés sous forme anonymisée", () => {
    expect(caseStudies).toHaveLength(4);
    expect(caseStudies.every((study) => study.eyebrow.startsWith("Cas anonymisé"))).toBe(true);
    expect(caseStudies.every((study) => study.title.length > 0)).toBe(true);
  });

  it("contient pour chaque cas une comparaison avant/après et un impact", () => {
    for (const study of caseStudies) {
      expect(study.before.margin).toMatch(/%/);
      expect(study.before.profitability).toContain("FCFA");
      expect(study.after.timeline).toMatch(/mois/);
      expect(study.after.margin).toMatch(/%/);
      expect(study.after.profitability).toContain("FCFA");
      expect(study.impact).toContain("FCFA");
      expect(study.levers.length).toBeGreaterThanOrEqual(3);
    }
  });
});
