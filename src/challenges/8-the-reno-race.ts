export function drawRace(indices: number[], length: number): string {
  let race = "";

  for (let i = 0; i < indices.length; i++) {
    const spaces = " ".repeat(indices.length - i - 1);
    const completeLane = "~".repeat(length);
    let lane = "";

    if (indices[i] !== 0) {
      lane = completeLane.slice(0, indices[i]) + "r";
      if (indices[i] !== -1) lane += completeLane.slice(indices[i] + 1);
    } else {
      lane = completeLane;
    }

    lane += ` /${i + 1}`;
    if (i !== indices.length - 1) lane += "\n";
    race += spaces + lane;
  }

  return race;
}
