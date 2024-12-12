import { describe, expect, test } from "@jest/globals";
import { drawRace } from "../challenges/8-the-reno-race";

describe("Challenge 8: The reno race", () => {
  test("Case 1", () => {
    const race1 = drawRace([0, 5, -3], 10);
    expect(race1).toBe("  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3");
  });

  test("Case 2", () => {
    const race2 = drawRace([2, -1, 0, 5], 8);
    expect(race2).toBe(
      "   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4"
    );
  });

  test("Case 3", () => {
    const race1 = drawRace([3, 7, -2], 12);
    expect(race1).toBe("  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3");
  });
});
