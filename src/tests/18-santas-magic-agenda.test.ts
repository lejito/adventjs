import { describe, expect, test } from "@jest/globals";
import { findInAgenda } from "../challenges/18-santas-magic-agenda";

describe("Challenge 18: Santa's Magic Agenda", () => {
  const agenda =
    "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York";

  test("Case 1", () => {
    expect(findInAgenda(agenda, "34-600-123-456")).toStrictEqual({
      name: "Juan Perez",
      address: "Calle Gran Via 12",
    });
  });

  test("Case 2", () => {
    expect(findInAgenda(agenda, "600-987")).toStrictEqual({
      name: "Maria Gomez",
      address: "Plaza Mayor 45 Madrid 28013",
    });
  });

  test("Case 3", () => {
    expect(findInAgenda(agenda, "111")).toBeNull();
  });

  test("Case 4", () => {
    expect(findInAgenda(agenda, "1")).toBeNull();
  });
});
