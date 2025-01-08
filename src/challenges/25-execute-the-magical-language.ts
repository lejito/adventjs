export function execute(code: string): number {
  let value = 0;

  let i = 0;
  while (i < code.length) {
    let instruction = code[i];

    switch (instruction) {
      case ">":
        break;
      case "+":
        value++;
        break;
      case "-":
        value--;
        break;
      case "[":
        if (value === 0) i = code.indexOf("]", i);
        break;
      case "{":
        if (value === 0) i = code.indexOf("}", i);
        break;
      case "]":
        i = code.lastIndexOf("[", i) - 1;
        break;
    }

    i++;
  }

  return value;
}
