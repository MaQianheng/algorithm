/*
* @Author: 123456
* @Date:   2022-03-01 14:16:34
* @Last Modified by:   123456
* @Last Modified time: 2022-03-01 14:28:59
*/
var removeElement = function(nums, val) {
	let left = 0, right = nums.length - 1
    while (left < right + 1) {
        if (nums[left] === val) nums[left] = nums[right--]
    	else left += 1
    }
    return left
}
console.log(removeElement([2], 3))