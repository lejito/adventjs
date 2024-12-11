export type Shoe = {
  type: "I" | "R";
  size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
  const organizedShoes: number[] = [];

  while (shoes.length > 0) {
    const shoe = shoes.shift();

    if (!shoe) return organizedShoes;

    const pairIndex = shoes.findIndex(
      (s) => s.size === shoe.size && s.type !== shoe.type
    );

    if (pairIndex !== -1) {
      organizedShoes.push(shoe.size);
      shoes.splice(pairIndex, 1);
    }
  }

  return organizedShoes;
}
