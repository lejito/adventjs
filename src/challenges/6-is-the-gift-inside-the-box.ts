export function inBox(box: string[]): boolean {
  if (!(/^#+$/.test(box[0]) && /^#+$/.test(box[box.length - 1]))) return false;
  
  let thereIsAStar = false;
  for (let i = 0; i < box.length; i++) {
    const row = box[i];
    if (row[0] !== "#" || row[row.length - 1] !== "#") return false;
    if (row.includes("*")) thereIsAStar = true;
  }

  return thereIsAStar;
}
