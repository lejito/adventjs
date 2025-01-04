import { describe, expect, test } from "@jest/globals";
import { treeHeight } from "../challenges/21-calculate-the-height-of-the-christmas-tree";

describe("Challenge 21: Calculate the height of the Christmas tree", () => {
  test("Case 1", () => {
    const tree = {
      value: "🎁",
      left: {
        value: "🎄",
        left: {
          value: "⭐",
          left: null,
          right: null,
        },
        right: {
          value: "🎅",
          left: null,
          right: null,
        },
      },
      right: {
        value: "❄️",
        left: null,
        right: {
          value: "🦌",
          left: null,
          right: null,
        },
      },
    };
    expect(treeHeight(tree)).toBe(3);
  });
});
