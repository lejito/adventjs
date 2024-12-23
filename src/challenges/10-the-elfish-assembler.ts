export function compile(instructions: string[]): number | undefined {
  const registers = new Map<string, number>();
  
  let i = 0;
  while (i < instructions.length) {
    const [command, arg1, arg2] = instructions[i].split(" ");

    switch (command) {
      case "JMP":
        if ((registers.get(arg1) || 0) === 0) {
          i = parseInt(arg2, 10) - 1;
        }
        break;
      case "MOV":
        const value = isNaN(Number(arg1))
          ? registers.get(arg1) || 0
          : parseInt(arg1, 10);
        registers.set(arg2, value);
        break;
      case "INC":
        registers.set(arg1, (registers.get(arg1) || 0) + 1);
        break;

      case "DEC":
        registers.set(arg1, (registers.get(arg1) || 0) - 1);
        break;
    }
    i++;
  }

  return registers.get("A");
}
