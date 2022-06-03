class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

const a = new Node(11);
const b = new Node(6);
const c = new Node(7);
const d = new Node(8);
const e = new Node(4);
const f = new Node(1);
a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.right = f;

console.log(maxPathSum(a));
