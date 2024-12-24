export function isRobotBack(moves: string): true | [number, number] {
  let x = 0;
  let y = 0;

  const movements = new Map<string, [number, number, string, boolean]>([
    ["R", [1, 0, "L", false]],
    ["L", [-1, 0, "R", false]],
    ["U", [0, 1, "D", false]],
    ["D", [0, -1, "U", false]],
  ]);

  let lastMove: string = "";
  let i = 0;
  while (i < moves.length) {
    let move = moves[i];
    if (movements.has(move)) {
      const [dx, dy] = movements.get(move)!;
      x += dx;
      y += dy;
    } else if (move === "*") {
      move = moves[++i];
      const [dx, dy] = movements.get(move)!;
      x += dx * 2;
      y += dy * 2;
    } else if (move === "!") {
      move = moves[++i];
      const [dx, dy, reverse] = movements.get(move)!;
      x += dx * -1;
      y += dy * -1;
      move = reverse;
    } else if (move === "?") {
      move = moves[++i];
      const [dx, dy, _, hasBeenDone] = movements.get(move)!;
      if (!hasBeenDone) {
        x += dx;
        y += dy;
      } else {
        move = lastMove;
      }
    }
    const [dx, dy, reverse] = movements.get(move)!;
    movements.set(move, [dx, dy, reverse, true]);
    lastMove = move;
    i++;
  }

  return x === 0 && y === 0 ? true : [x, y];
}
