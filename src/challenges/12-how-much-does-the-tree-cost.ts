export function calculatePrice(ornaments: string): number | undefined {
  const prices: Record<string, number> = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  let totalPrice = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const ornament = ornaments[i];
    let price = prices[ornament];

    if (!price) return undefined;

    const priceNext = prices[ornaments[i + 1]] || 0;
    if (priceNext > price) price *= -1;
    totalPrice += price;
  }

  return totalPrice;
}
