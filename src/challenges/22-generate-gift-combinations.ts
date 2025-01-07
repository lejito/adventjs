export function generateGiftSets(gifts: string[]): string[][] {
  let giftSets: string[][] = [];

  function generateCombinations(k: number) {
    const combinations: string[][] = [];

    function recursion(temp: string[], s: number) {
      if (temp.length === k) {
        combinations.push([...temp]);
        return;
      }

      for (let i = s; i < gifts.length; i++) {
        temp.push(gifts[i]);
        recursion(temp, i + 1);
        temp.pop();
      }
    }

    recursion([], 0);

    giftSets = [...giftSets, ...combinations];
  }

  for (let i = 1; i <= gifts.length; i++) {
    generateCombinations(i);
  }

  return giftSets;
}
