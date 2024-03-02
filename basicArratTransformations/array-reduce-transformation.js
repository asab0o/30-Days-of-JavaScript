/**
 * Input: 
 * nums = [1,2,3,4]
 * fn = function sum(accum, curr) { return accum + curr; }
 * init = 0
 * Output: 10
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let ans = init;
  for (let i = 0; i < nums.length; i++) {
      ans = fn(ans, nums[i]);
  }
  return ans;
};

/* Using forEach method */
var reduce = function(nums, fn, init) {
  let ans = init;
  nums.forEach((num) => {
      ans = fn(ans, num);
  })
  return ans;
};
