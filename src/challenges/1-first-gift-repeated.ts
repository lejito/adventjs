export function prepareGifts(gifts: number[]): number[] {
  // Quick Sort algorithm

  if (gifts.length <= 1) {
    return gifts;
  }

  const pivot = gifts[0];
  const higher = [];
  const lower = [];

  for (let i = 1; i < gifts.length; i++) {
    if (gifts[i] > pivot) {
      higher.push(gifts[i]);
    } else if (gifts[i] < pivot) {
      lower.push(gifts[i]);
    }
  }

  return [
    ...prepareGifts(lower),
    pivot,
    ...prepareGifts(higher),
  ];
}
