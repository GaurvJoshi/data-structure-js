/* Q - Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
My Solution - 
Runtime: 150 ms, faster than 34.51% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 50.2 MB, less than 86.31% of JavaScript online submissions for Contains Duplicate. */
const constainDuplicate = (nums) => {
  return !(nums.length === new Set(nums).size);
};
