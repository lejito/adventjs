import { describe, expect, test } from "@jest/globals";
import { drawTable } from "../challenges/15-drawing-tables";

describe("Challenge 15: Drawing tables", () => {
  test("Case 1", () => {
    const table = drawTable([
      { name: "Alice", city: "London" },
      { name: "Bob", city: "Paris" },
      { name: "Charlie", city: "New York" },
    ]);

    expect(table).toBe(
      "+---------+----------+\n| Name    | City     |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+"
    );
  });

  test("Case 2", () => {
    const table = drawTable([
      { gift: "Doll", quantity: 10 },
      { gift: "Book", quantity: 5 },
      { gift: "Music CD", quantity: 1 },
    ]);

    expect(table).toBe(
      "+----------+----------+\n| Gift     | Quantity |\n+----------+----------+\n| Doll     | 10       |\n| Book     | 5        |\n| Music CD | 1        |\n+----------+----------+"
    );
  });
});
