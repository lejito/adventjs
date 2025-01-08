import { describe, expect, test } from "@jest/globals";
import { findMissingNumbers } from "../challenges/23-find-the-missing-numbers";

describe("Challenge 23: Find the missing numbers", () => {
  test("Case 1", () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toStrictEqual([3, 5]);
  });

  test("Case 2", () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toStrictEqual([1, 3, 5, 6]);
  });

  test("Case 3", () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toStrictEqual([]);
  });

  test("Case 4", () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toStrictEqual([4]);
  });
});
