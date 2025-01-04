export function treeHeight(
  tree: { value: string; left: any; right: any } | null
): number {
  function treeHeightRecursion(node: { left: any; right: any } | null): number {
    if (node === null) {
      return 0;
    }
    return (
      1 +
      Math.max(treeHeightRecursion(node.left), treeHeightRecursion(node.right))
    );
  }

  const height = treeHeightRecursion(tree);

  return height;
}
