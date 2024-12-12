import { describe, expect, test } from "@jest/globals";
import { fixPackages } from "../challenges/7-the-grinchs-attack";

describe("Challenge 7: The Grinch's attack", () => {
  test("Case 1", () => {
    const fixedPackages1 = fixPackages("a(cb)de");
    expect(fixedPackages1).toBe("abcde");
  });

  test("Case 2", () => {
    const fixedPackages2 = fixPackages("a(bc(def)g)h");
    expect(fixedPackages2).toBe("agdefcbh");
  });

  test("Case 3", () => {
    const fixedPackages3 = fixPackages("abc(def(gh)i)jk");
    expect(fixedPackages3).toBe("abcighfedjk");
  });

  test("Case 4", () => {
    const fixedPackages4 = fixPackages("a(b(c))e");
    expect(fixedPackages4).toBe("acbe");
  });
});
