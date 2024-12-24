import { describe, expect, test } from "@jest/globals";
import { removeSnow } from "../challenges/16-cleaning-the-snow-path";

describe("Challenge 16: Cleaning the snow path", () => {
  test("Case 1", () => {
    expect(removeSnow("zxxzoz")).toBe("oz");
  });

  test("Case 2", () => {
    expect(removeSnow("abcdd")).toBe("abc");
  });

  test("Case 3", () => {
    expect(removeSnow("zzz")).toBe("z");
  });

  test("Case 4", () => {
    expect(removeSnow("a")).toBe("a");
  });
});
