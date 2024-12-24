export function removeSnow(s: string): string {
  let i = 0;
  while (i < s.length) {
    if (i > s.length - 1) break;

    if (s[i] == s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2);
      if (i > 0) i--;
    } else {
      i++;
    }
  }

  return s;
}
