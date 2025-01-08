export function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  function isMirror(tree1: any, tree2: any): boolean {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;

    const rootsAreEqual = tree1.value === tree2.value;
    const leftIsMirror = isMirror(tree1.left, tree2.right);
    const rightIsMirror = isMirror(tree1.right, tree2.left);
    
    return rootsAreEqual && leftIsMirror && rightIsMirror;
  }

  const tree1Root = tree1?.value;
  const isMirrorTree = isMirror(tree1, tree2);

  return [isMirrorTree, tree1Root || ""];
}
