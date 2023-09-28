/*
* @Author: 123456
* @Date:   2022-02-21 14:51:23
* @Last Modified by:   123456
* @Last Modified time: 2022-02-21 14:59:53
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1
    let numLeft = 0, numRight = nums.length - 1, numMid = null
    while (numLeft <= numRight) {
        numMid = numLeft + ((numRight - numLeft) >> 1)
        if (nums[numMid] === target) return numMid
    	if (nums[numLeft] === target) return numLeft
		if (nums[numRight] === target) return numRight
        if (nums[numMid] < target) {
        	// if (nums[numLeft] < target) {}
        	numLeft = numMid + 1
        }
        if (nums[numMid] > target) {
            if (nums[numLeft] > target) numLeft = numMid + 1
            else numRight = numMid - 1
        }
    }
    return -1
};

console.log(search([5,1,2,3,4], 1))