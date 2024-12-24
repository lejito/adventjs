import { describe, expect, test } from "@jest/globals";
import { minMovesToStables } from "../challenges/14-weaving-the-reno";

describe("Challenge 14: Weaving the reno", () => {
  test("Case 1", () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toBe(3)
  });

  test("Case 2", () => {
    expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toBe(8)
  });
});
