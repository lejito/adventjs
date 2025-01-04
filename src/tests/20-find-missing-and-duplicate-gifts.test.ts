import { describe, expect, test } from "@jest/globals";
import { fixGiftList } from "../challenges/20-find-missing-and-duplicate-gifts";

describe("Challenge 20: Find missing and duplicate gifts", () => {
  test("Case 1", () => {
    expect(
      fixGiftList(
        ["puzzle", "car", "doll", "car"],
        ["car", "puzzle", "doll", "ball"]
      )
    ).toStrictEqual({ missing: { ball: 1 }, extra: { car: 1 } });
  });

  test("Case 2", () => {
    expect(
      fixGiftList(
        ["book", "train", "kite", "train"],
        ["train", "book", "kite", "ball", "kite"]
      )
    ).toStrictEqual({ missing: { ball: 1, kite: 1 }, extra: { train: 1 } });
  });

  test("Case 3", () => {
    expect(
      fixGiftList(
        ["bear", "bear", "car"],
        ["bear", "car", "puzzle", "bear", "car", "car"]
      )
    ).toStrictEqual({ missing: { puzzle: 1, car: 2 }, extra: {} });
  });

  test("Case 4", () => {
    expect(
      fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"])
    ).toStrictEqual({ missing: {}, extra: {} });
  });
});
