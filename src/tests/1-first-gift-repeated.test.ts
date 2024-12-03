import { describe, expect, test } from "@jest/globals";
import { prepareGifts } from "../challenges/1-first-gift-repeated";

describe("Challenge 1: First Gift Repeated!", () => {
  test("Case 1", () => {
    const gifts1 = [3, 1, 2, 3, 4, 2, 5];
    const preparedGifts1 = prepareGifts(gifts1);
    expect(preparedGifts1).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("Case 2", () => {
    const gifts2 = [6, 5, 5, 5, 5];
    const preparedGifts2 = prepareGifts(gifts2);
    expect(preparedGifts2).toStrictEqual([5, 6]);
  });

  test("Case 3", () => {
    const gifts3: number[] = [];
    const preparedGifts3 = prepareGifts(gifts3);
    expect(preparedGifts3).toStrictEqual([]);
  });
});
