export function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const giftList: {
    missing: Record<string, number>;
    extra: Record<string, number>;
  } = {
    missing: {},
    extra: {},
  };

  received.forEach((gift) => {
    if (expected.includes(gift)) {
      expected.splice(expected.indexOf(gift), 1);
    } else {
      giftList.extra[gift] = (giftList.extra[gift] || 0) + 1;
    }
  });

  expected.forEach((gift) => {
    giftList.missing[gift] = (giftList.missing[gift] || 0) + 1;
  });

  return giftList;
}
