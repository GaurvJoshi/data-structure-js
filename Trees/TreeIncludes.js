class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
// breadthLevelSearch
const treeIncludesBreadth = (root, target) => {
  if (root === null) return false;
  const que = [root];

  while (que.length > 0) {
    const curr = que.shift();
    if (curr.val === target) return true;
    if (curr.left) que.push(curr.left);
    if (curr.right) que.push(curr.right);
  }
  return false;
};

// recursiveDepthLevelSearch

const treeIncludesDepth = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return (
    treeIncludesDepth(root.left, target) ||
    treeIncludesBreadth(root.right, target)
  );
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.right = f;

console.log(treeIncludesDepth(a, "j"));
