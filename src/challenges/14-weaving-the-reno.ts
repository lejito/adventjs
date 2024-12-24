export function minMovesToStables(reindeer: number[], stables: number[]): number {
  let minMovements = 0;

  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  for (let i = 0; i < reindeer.length; i++) {
    minMovements += Math.abs(reindeer[i] - stables[i]);
  }

  return minMovements;
}
