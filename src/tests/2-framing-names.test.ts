import { describe, expect, test } from "@jest/globals";
import { createFrame } from "../challenges/2-framing-names";

describe("Challenge 2: Framing Names", () => {
  test("Case 1", () => {
    const frame1 = createFrame(["midu", "madeval", "educalvolpz"]);
    expect(frame1).toBe(
      "***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************"
    );
  });

  test("Case 2", () => {
    const frame2 = createFrame(["midu"]);
    expect(frame2).toBe("********\n* midu *\n********");
  });

  test("Case 3", () => {
    const frame3 = createFrame(["a", "bb", "ccc"]);
    expect(frame3).toBe("*******\n* a   *\n* bb  *\n* ccc *\n*******");
  });
});
