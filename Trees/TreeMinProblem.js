class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Iterative solution
const treeMin = (root) => {
  let smallestValue = Infinity;
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val < smallestValue) smallestValue = curr.val;
    if (curr.left !== null) stack.push(curr.left);
    if (curr.right !== null) stack.push(curr.right);
  }
  return smallestValue;
};
// Recursive Solution
const treeMinRecursive = (root) => {
  if (root === null) return Infinity;
  return Math.min(
    root.val,
    treeMinRecursive(root.left),
    treeMinRecursive(root.right)
  );
};
const a = new Node(11);
const b = new Node(6);
const c = new Node(7);
const d = new Node(8);
const e = new Node(4);
const f = new Node(10);
a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.right = f;

console.log(treeMin(a));
console.log(treeMinRecursive(a));
