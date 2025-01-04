export function distributeWeight(weight: number): string {
  const boxRepresentations: { [key: number]: string[] } = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const numberOfBoxes: { [key: number]: number } = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
  };

  [10, 5, 2, 1].forEach((box) => {
    numberOfBoxes[box] = Math.floor(weight / box);
    weight -= numberOfBoxes[box] * box;
  });

  let result: string[] = [];
  const boxesKeys = Object.keys(numberOfBoxes).map((key) => parseInt(key));
  for (const box of boxesKeys) {
    for (let i = 0; i < numberOfBoxes[box]; i++) {
      for (let j = 0; j < boxRepresentations[box].length; j++) {
        const row = boxRepresentations[box][j];
        if (result.length > 0 && j === 0) {
          result.push((result.pop() ?? "").padEnd(row.length - 1, "_"));
        } else {
          result.push(row);
        }
      }
    }
  }

  return result.join("\n");
}
