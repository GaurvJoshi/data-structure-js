class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const breadthFirstValue = (root) => {
  if (root === null) {
    console.log([]);
    return [];
  }
  const que = [root];
  const result = [];

  while (que.length > 0) {
    const curr = que.shift();
    result.push(curr.val);
    if (curr.left) que.push(curr.left);
    if (curr.right) que.push(curr.right);
  }
  console.log(result);
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

breadthFirstValue(a);
