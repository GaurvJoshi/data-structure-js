/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// My Solution - Runtime: 329 ms, faster than 30.94% of JavaScript online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 99.3 MB, less than 27.24% of JavaScript online submissions for Minimum Depth of Binary Tree.
var minDepth = function (root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  let left = 0;
  let right = 0;
  if (root.left === null) {
    left = Infinity;
  } else {
    left = 1 + minDepth(root.left);
  }

  if (root.right === null) {
    right = Infinity;
  } else {
    right = 1 + minDepth(root.right);
  }
  return Math.min(left, right);
};

// other solution

var minDepthOther = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
