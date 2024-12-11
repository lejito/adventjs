import { describe, expect, test } from "@jest/globals";
import { createXmasTree } from "../challenges/4-decorating-the-christmas-tree";

describe("Challenge 4: Decorating the Christmas tree", () => {
  test("Case 1", () => {
    const tree1 = createXmasTree(5, "*");
    expect(tree1).toBe(
      "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____"
    );
  });

  test("Case 2", () => {
    const tree2 = createXmasTree(3, "+");
    expect(tree2).toBe("__+__\n_+++_\n+++++\n__#__\n__#__");
  });

  test("Case 3", () => {
    const tree3 = createXmasTree(6, "@");
    expect(tree3).toBe(
      "_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____"
    );
  });
});
