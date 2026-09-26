import { describe, expect, it } from "vitest";
import { hostSpaces, practitioners, seedMatches } from "../fixtures/third-place.seed";

describe("third-place seed corpus", () => {
  it("contains the planned marketplace inventory", () => {
    expect(practitioners).toHaveLength(10);
    expect(hostSpaces).toHaveLength(5);
  });

  it("covers all eight practice categories", () => {
    const categories = new Set(
      practitioners.map((practitioner) => practitioner.primaryCategory),
    );

    expect(categories.size).toBe(8);
  });

  it("gives every practitioner all three matching tag families", () => {
    for (const practitioner of practitioners) {
      expect(practitioner.teaches.length).toBeGreaterThan(0);
      expect(practitioner.needs.length).toBeGreaterThan(0);
      expect(practitioner.hosts.length).toBeGreaterThan(0);
    }
  });

  it("contains at least three accepted or proposed credible matches", () => {
    const viableMatches = seedMatches.filter((match) =>
      ["proposed", "offered", "accepted"].includes(match.status),
    );

    expect(viableMatches.length).toBeGreaterThanOrEqual(3);
  });

  it("references real practitioners and real spaces", () => {
    const practitionerIds = new Set(practitioners.map(({ id }) => id));
    const spaceIds = new Set(hostSpaces.map(({ id }) => id));

    for (const match of seedMatches) {
      expect(practitionerIds.has(match.practitionerId)).toBe(true);
      expect(spaceIds.has(match.hostSpaceId)).toBe(true);
    }
  });
});