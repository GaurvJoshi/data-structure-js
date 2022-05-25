class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
const depthFirstValue = (root) => {
  if (root === null) return [];
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    values.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  console.log(values);
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
depthFirstValue(a);
