import { describe, expect, test } from "@jest/globals";
import { detectBombs } from "../challenges/17-grinchs-bombs";

describe("Challenge 17: Grinch's bombs", () => {
  test("Case 1", () => {
    expect(
      detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ])
    ).toStrictEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ]);
  });

  test("Case 2", () => {
    expect(
      detectBombs([
        [true, false],
        [false, false],
      ])
    ).toStrictEqual([
      [0, 1],
      [1, 1],
    ]);
  });

  test("Case 3", () => {
    expect(
      detectBombs([
        [true, true],
        [false, false],
        [true, true],
      ])
    ).toStrictEqual([
      [1, 1],
      [4, 4],
      [1, 1],
    ]);
  });
});
