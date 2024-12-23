import { describe, expect, test } from "@jest/globals";
import { decodeFilename } from "../challenges/11-filenames-encoded";

describe("Challenge 11: Filenames encoded", () => {
  test("Case 1", () => {
    const filename = decodeFilename('2023122512345678_sleighDesign.png.grinchwa');
    expect(filename).toBe('sleighDesign.png');
  });

  test("Case 2", () => {
    const filename = decodeFilename('42_chimney_dimensions.pdf.hack2023');
    expect(filename).toBe('chimney_dimensions.pdf');
  });

  test("Case 3", () => {
    const filename = decodeFilename('987654321_elf-roster.csv.tempfile');
    expect(filename).toBe('elf-roster.csv');
  });
});
