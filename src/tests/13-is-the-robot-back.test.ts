import { describe, expect, test } from "@jest/globals";
import { isRobotBack } from "../challenges/13-is-the-robot-back";

describe("Challenge 13: Is the robot back?", () => {
  test("Case 1", () => {
    expect(isRobotBack("R")).toStrictEqual([1, 0]);
  });

  test("Case 2", () => {
    expect(isRobotBack("RL")).toStrictEqual(true);
  });

  test("Case 3", () => {
    expect(isRobotBack("RLUD")).toStrictEqual(true);
  });

  test("Case 4", () => {
    expect(isRobotBack("*RU")).toStrictEqual([2, 1]);
  });

  test("Case 5", () => {
    expect(isRobotBack("R*U")).toStrictEqual([1, 2]);
  });

  test("Case 6", () => {
    expect(isRobotBack("LLL!R")).toStrictEqual([-4, 0]);
  });

  test("Case 7", () => {
    expect(isRobotBack("R?R")).toStrictEqual([1, 0]);
  });

  test("Case 8", () => {
    expect(isRobotBack("U?D")).toStrictEqual(true);
  });

  test("Case 9", () => {
    expect(isRobotBack("R!L")).toStrictEqual([2, 0]);
  });

  test("Case 10", () => {
    expect(isRobotBack("U!D")).toStrictEqual([0, 2]);
  });

  test("Case 11", () => {
    expect(isRobotBack("R?L")).toStrictEqual(true);
  });

  test("Case 12", () => {
    expect(isRobotBack("U?U")).toStrictEqual([0, 1]);
  });

  test("Case 13", () => {
    expect(isRobotBack("*U?U")).toStrictEqual([0, 2]);
  });

  test("Case 14", () => {
    expect(isRobotBack("U?D?U")).toStrictEqual(true);
  });
});
