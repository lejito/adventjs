import { describe, expect, test } from "@jest/globals";
import { getCompleted } from "../challenges/26-calculate-the-completed-percentage";

describe("Challenge 26: Calculate the completed percentage", () => {
  test("Case 1", () => {
    expect(getCompleted("01:00:00", "03:00:00")).toBe("33%");
  });

  test("Case 2", () => {
    expect(getCompleted("02:00:00", "04:00:00")).toBe("50%");
  });

  test("Case 3", () => {
    expect(getCompleted("01:00:00", "01:00:00")).toBe("100%");
  });

  test("Case 4", () => {
    expect(getCompleted("00:10:00", "01:00:00")).toBe("17%");
  });

  test("Case 5", () => {
    expect(getCompleted("01:10:10", "03:30:30")).toBe("33%");
  });

  test("Case 6", () => {
    expect(getCompleted("03:30:30", "05:50:50")).toBe("60%");
  });
});
