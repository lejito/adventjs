import { describe, expect, test } from "@jest/globals";
import { organizeInventory } from "../challenges/3-organizing-the-inventory";

describe("Challenge 3: Organizing the inventory", () => {
  test("Case 1", () => {
    const inventary1 = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ];
    const organized1 = organizeInventory(inventary1);
    expect(organized1).toStrictEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });
  });

  test("Case 2", () => {
    const inventary2 = [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ];
    const organized2 = organizeInventory(inventary2);
    expect(organized2).toStrictEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
});
