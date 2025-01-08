import { describe, expect, test } from "@jest/globals";
import { execute } from "../challenges/25-execute-the-magical-language";

describe("Challenge 25: Execute the magical language", () => {
  test("Case 1", () => {
    expect(execute("+++")).toBe(3);
  });

  test("Case 2", () => {
    expect(execute("+--")).toBe(-1);
  });

  test("Case 3", () => {
    expect(execute(">+++[-]")).toBe(0);
  });

  test("Case 4", () => {
    expect(execute(">>>+{++}")).toBe(3);
  });

  test("Case 5", () => {
    expect(execute("+{[-]+}+")).toBe(2);
  });

  test("Case 6", () => {
    expect(execute("{+}{+}{+}")).toBe(0);
  });

  test("Case 7", () => {
    expect(execute("------[+]++")).toBe(2);
  });

  test("Case 8", () => {
    expect(execute("-[++{-}]+{++++}")).toBe(5);
  });
});
