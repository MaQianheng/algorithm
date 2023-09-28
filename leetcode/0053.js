/*
* @Author: 123456
* @Date:   2021-05-14 14:27:47
* @Last Modified by:   123456
* @Last Modified time: 2022-02-23 09:52:35
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + (nums[i - 1] || 0))
    }
    return Math.max(...nums)
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))