export function fixPackages(packages: string): string {
  const toResolve: number[] = [];
  const packagesArray = packages.split("");

  for (let i = 0; i < packagesArray.length; i++) {
    if (packagesArray[i] === "(") {
      toResolve.push(i);
    } else if (packagesArray[i] === ")") {
      const start = toResolve.pop();
      const end = i;
      if (start !== undefined) {
        const reversed = packagesArray.slice(start, end + 1).reverse();
        packagesArray.splice(start, reversed.length, ...reversed);
      }
    }
  }

  return packagesArray.join("").replace(/\(|\)/g, "");
}
