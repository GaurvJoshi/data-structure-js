class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthTreeSum = (root) => {
  if (root === null) return 0;
  return root.val + depthTreeSum(root.left) + depthTreeSum(root.right);
};

const a = new Node(5);
const b = new Node(6);
const c = new Node(7);
const d = new Node(8);
const e = new Node(9);
const f = new Node(10);
a.left = b;
b.left = d;
b.right = e;
a.right = c;
c.right = f;

console.log(depthTreeSum(a));
