export function createFrame(names: string[]): string {
  const longest = Math.max(...names.map((name) => name.length));

  const frame = [];
  const border = "*".repeat(longest + 4);
  frame.push(border);

  for (const name of names) {
    frame.push(`* ${name}${" ".repeat(longest - name.length)} *`);
  }

  return frame.join("\n") + "\n" + border;
}
