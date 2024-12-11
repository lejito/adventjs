import { describe, expect, test } from "@jest/globals";
import { organizeShoes, Shoe } from "../challenges/5-shoe-pairing";

describe("Challenge 5: Shoe pairing", () => {
  test("Case 1", () => {
    const shoes1: Shoe[] = [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 42 },
    ];
    const organizedShoes1 = organizeShoes(shoes1);
    expect(organizedShoes1).toStrictEqual([38, 42]);
  });

  test("Case 2", () => {
    const shoes2: Shoe[] = [
      { type: "I", size: 38 },
      { type: "R", size: 38 },
      { type: "I", size: 38 },
      { type: "I", size: 38 },
      { type: "R", size: 38 },
    ];
    const organizedShoes2 = organizeShoes(shoes2);
    expect(organizedShoes2).toStrictEqual([38, 38]);
  });

  test("Case 3", () => {
    const shoes3: Shoe[] = [
      { type: "I", size: 38 },
      { type: "R", size: 36 },
      { type: "R", size: 42 },
      { type: "I", size: 41 },
      { type: "I", size: 43 },
    ];
    const organizedShoes3 = organizeShoes(shoes3);
    expect(organizedShoes3).toStrictEqual([]);
  });
});
