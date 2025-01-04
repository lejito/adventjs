export function findInAgenda(
  agenda: string,
  phone: string
): { name: string; address: string } | null {
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;
  const agendaArray = agenda.split("\n");

  let result: { name: string; address: string } | null = null;

  for (let i = 0; i < agendaArray.length; i++) {
    const contact = agendaArray[i];

    if (contact.includes(phone)) {
      if (result) return null;

      const name = contact.match(/<(.*)>/)?.[1] || "";
      const address = contact
        .replace(name, "")
        .replace(phoneRegex, "")
        .replace("<>", "")
        .trim();

      result = { name, address };
    }
  }

  return result;
}
