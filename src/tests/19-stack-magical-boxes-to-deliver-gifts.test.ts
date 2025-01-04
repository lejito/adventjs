import { describe, expect, test } from "@jest/globals";
import { distributeWeight } from "../challenges/19-stack-magical-boxes-to-deliver-gifts";

describe("Challenge 19: Stack magical boxes to deliver gifts", () => {
  test("Case 1", () => {
    expect(distributeWeight(1)).toBe(" _ \n|_|");
  });

  test("Case 2", () => {
    expect(distributeWeight(2)).toBe(" ___ \n|___|");
  });

  test("Case 3", () => {
    expect(distributeWeight(3)).toBe(" _ \n|_|_\n|___|");
  });

  test("Case 4", () => {
    expect(distributeWeight(4)).toBe(" ___ \n|___|\n|___|");
  });

  test("Case 5", () => {
    expect(distributeWeight(5)).toBe(" _____ \n|     |\n|_____|");
  });

  test("Case 6", () => {
    expect(distributeWeight(6)).toBe(" _ \n|_|___\n|     |\n|_____|");
  });
});
