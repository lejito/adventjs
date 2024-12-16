type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

export function moveTrain(board: Board, mov: Movement): Result {
  const ENGINE = "@";
  const CARRIAGE = "o";
  const FRUIT = "*";
  const trainRow = board.findIndex((row) => row.includes(ENGINE));
  const trainCol = board[trainRow].indexOf(ENGINE);
  const directionOffsets: Record<Movement, [number, number]> = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  const [rowOffset, colOffset] = directionOffsets[mov];
  const newRow = trainRow + rowOffset;
  const newCol = trainCol + colOffset;
  if (
    newRow < 0 ||
    newRow >= board.length ||
    newCol < 0 ||
    newCol >= board[0].length
  ) {
    return "crash";
  }
  const nextPosition = board[newRow][newCol];
  if (nextPosition === CARRIAGE) {
    return "crash";
  } else if (nextPosition === FRUIT) {
    return "eat";
  }
  return "none";
}
