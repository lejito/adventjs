import { describe, expect, test } from "@jest/globals";
import { moveTrain } from "../challenges/9-the-magic-train";

describe("Challenge 9: The magic train", () => {
  const board = [
    "·····", 
    "*····", 
    "@····",
    "o····",
    "o····"
  ];

  test("Case 1", () => {
    const result1 = moveTrain(board, "U");
    expect(result1).toBe("eat");
  });

  test("Case 2", () => {
    const result2 = moveTrain(board, "D");
    expect(result2).toBe("crash");
  });

  test("Case 3", () => {
    const result3 = moveTrain(board, "L");
    expect(result3).toBe("crash");
  });

  test("Case 4", () => {
    const result4 = moveTrain(board, "R");
    expect(result4).toBe("none");
  });
});
