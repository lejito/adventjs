export function drawTable(
  data: Array<Record<string, string | number>>
): string {
  let separator = "";
  let header = "";
  let content = "";

  const columns = Object.keys(data[0]);

  const columnWidths = columns.map((column) =>
    Math.max(
      column.length,
      Math.max(...data.map((row) => row[column].toString().length))
    )
  );

  columns.forEach((column, i) => {
    separator += "+-" + "-".repeat(columnWidths[i]) + "-";

    header +=
      "| " +
      column[0].toUpperCase() +
      column.slice(1).padEnd(columnWidths[i] - 1) +
      " ";
  });

  separator += "+\n";
  header += "|\n";

  content =
    data
      .map((row) => {
        return (
          "| " +
          columns
            .map((column, i) => {
              return row[column].toString().padEnd(columnWidths[i]);
            })
            .join(" | ") +
          " |"
        );
      })
      .join("\n") + "\n";

  const table = separator + header + separator + content + separator;
  return table.trim();
}
