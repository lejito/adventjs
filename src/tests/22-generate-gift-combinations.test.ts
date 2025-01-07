import { describe, expect, test } from "@jest/globals";
import { generateGiftSets } from "../challenges/22-generate-gift-combinations";

describe("Challenge 22: Generate gift combinations", () => {
  test("Case 1", () => {
    expect(generateGiftSets(["car", "doll", "puzzle"])).toStrictEqual([
      ["car"],
      ["doll"],
      ["puzzle"],
      ["car", "doll"],
      ["car", "puzzle"],
      ["doll", "puzzle"],
      ["car", "doll", "puzzle"],
    ]);
  });

  test("Case 2", () => {
    expect(generateGiftSets(["ball"])).toStrictEqual([["ball"]]);
  });

  test("Case 3", () => {
    expect(generateGiftSets(["game", "pc"])).toStrictEqual([
      ["game"],
      ["pc"],
      ["game", "pc"],
    ]);
  });
});
