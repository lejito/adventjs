import { describe, expect, test } from "@jest/globals";
import { calculatePrice } from "../challenges/12-how-much-does-the-tree-cost";

describe("Challenge 12: How much does the tree cost?", () => {
  test("Case 1", () => {
    expect(calculatePrice("***")).toBe(3);
  });

  test("Case 2", () => {
    expect(calculatePrice("*o")).toBe(4);
  });

  test("Case 3", () => {
    expect(calculatePrice("o*")).toBe(6);
  });

  test("Case 4", () => {
    expect(calculatePrice("*o*")).toBe(5);
  });

  test("Case 5", () => {
    expect(calculatePrice("**o*")).toBe(6);
  });

  test("Case 6", () => {
    expect(calculatePrice("o***")).toBe(8);
  });

  test("Case 7", () => {
    expect(calculatePrice("*o@")).toBe(94);
  });

  test("Case 8", () => {
    expect(calculatePrice("*#")).toBe(49);
  });

  test("Case 9", () => {
    expect(calculatePrice("@@@")).toBe(300);
  });

  test("Case 10", () => {
    expect(calculatePrice("#@")).toBe(50);
  });

  test("Case 11", () => {
    expect(calculatePrice("#@Z")).toBe(undefined);
  });
});
