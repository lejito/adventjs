import { describe, expect, test } from "@jest/globals";
import { compile } from "../challenges/10-the-elfish-assembler";

describe("Challenge 10: The elfish assembler", () => {
  test("Case 1", () => {
    const instructions = ["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"];
    const result = compile(instructions);
    expect(result).toBe(2);
  });

  test("Case 2", () => {
    const instructions = ["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"];
    const result = compile(instructions);
    expect(result).toBe(-2);
  });

  test("Case 3", () => {
    const instructions = ["MOV 3 C", "DEC C", "DEC C", "DEC C", "JMP C 3", "MOV C A"];
    const result = compile(instructions);
    expect(result).toBe(-1);
  });
});
