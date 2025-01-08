import { describe, expect, test } from "@jest/globals";
import { isTreesSynchronized } from "../challenges/24-check-if-trees-are-magical-mirrors";

describe("Challenge 24: Check if trees are magical mirrors", () => {
  const tree1 = {
    value: "🎄",
    left: { value: "⭐" },
    right: { value: "🎅" },
  };

  const tree2 = {
    value: "🎄",
    left: { value: "🎅" },
    right: { value: "⭐" },
  };

  const tree3 = {
    value: "🎄",
    left: { value: "🎅" },
    right: { value: "🎁" },
  };

  const tree4 = {
    value: "🎄",
    left: { value: "⭐" },
    right: { value: "🎅" },
  };

  test("Case 1", () => {
    expect(isTreesSynchronized(tree1, tree2)).toStrictEqual([true, "🎄"]);
  });

  test("Case 2", () => {
    expect(isTreesSynchronized(tree1, tree3)).toStrictEqual([false, "🎄"]);
  });

  test("Case 3", () => {
    expect(isTreesSynchronized(tree1, tree4)).toStrictEqual([false, "🎄"]);
  });

  test("Case 4", () => {
    expect(isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" })).toStrictEqual(
      [false, "🎅"]
    );
  });
});
