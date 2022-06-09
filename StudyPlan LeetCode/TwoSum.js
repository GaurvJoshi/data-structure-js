/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let newTable = [];
  for (let i = 0; i < nums.length; i++) {
    if (newTable.indexOf(nums[i]) != -1) return [newTable.indexOf(nums[i]), i];
    newTable.push(target - nums[i]);
  }
  return [];
};
