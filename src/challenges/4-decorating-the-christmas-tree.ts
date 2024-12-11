export function createXmasTree(height: number, ornament: string): string {
  let tree = "";
  let trunk = "";
  const weight = height * 2 - 1;

  for (let i = 1; i <= height; i++) {
    const ornaments = ornament.repeat(i * 2 - 1);
    const spaces = "_".repeat((weight - ornaments.length) / 2);
    tree += `${spaces}${ornaments}${spaces}\n`;

    if (i === 1) trunk = tree.replace(ornament, "#");
  }

  tree += trunk.repeat(2).trimEnd();

  return tree;
}
