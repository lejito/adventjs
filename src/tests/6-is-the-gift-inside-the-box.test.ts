import { describe, expect, test } from "@jest/globals";
import { inBox } from "../challenges/6-is-the-gift-inside-the-box";

describe("Challenge 6: Is the gift inside the box?", () => {
  test("Case 1", () => {
    const isInBox1 = inBox(["###", "#*#", "###"]);
    expect(isInBox1).toBe(true);
  });

  test("Case 2", () => {
    const isInBox2 = inBox(["####", "#* #", "#  #", "####"]);
    expect(isInBox2).toBe(true);
  });

  test("Case 3", () => {
    const isInBox3 = inBox(["#####", "#   #", "#  #*", "#####"]);
    expect(isInBox3).toBe(false);
  });

  test("Case 4", () => {
    const isInBox4 = inBox(["#####", "#   #", "#   #", "#   #", "#####"]);
    expect(isInBox4).toBe(false);
  });
});
