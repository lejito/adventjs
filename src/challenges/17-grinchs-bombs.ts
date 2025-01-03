export function detectBombs(grid: boolean[][]): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const bombs = Array.from({ length: m }, () => Array(n).fill(0));

  const movs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === true) {
        movs.forEach(([dx, dy]) => {
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && x < m && y >= 0 && y < n) {
            bombs[x][y] += 1;
          }
        });
      }
    }
  }

  return bombs;
}
