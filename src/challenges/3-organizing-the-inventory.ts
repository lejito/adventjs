type Inventory = Array<
  { name: string, quantity: number, category: string }
>

export function organizeInventory(inventory: Inventory): object {
  if (inventory.length === 0) {
    return {}
  }

  const organizedInventory: { [key: string]: { [key: string]: number } } = {}

  for (const item of inventory) {
    if (!organizedInventory[item.category]) {
      organizedInventory[item.category] = {}
    }

    if (!organizedInventory[item.category][item.name]) {
      organizedInventory[item.category][item.name] = 0
    }

    organizedInventory[item.category][item.name] += item.quantity
  }

  return organizedInventory;
}