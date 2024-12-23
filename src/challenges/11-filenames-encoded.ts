export function decodeFilename(filename: string): string {
  const indexUnderscore = filename.indexOf("_");
  const indexDot = filename.indexOf(".");
  const index2Dot = filename.indexOf(".", indexDot + 1);

  return filename.substring(indexUnderscore + 1, index2Dot);
}
