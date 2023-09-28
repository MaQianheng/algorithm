/*
* @Author: 123456
* @Date:   2022-03-16 16:57:42
* @Last Modified by:   123456
* @Last Modified time: 2022-03-16 17:01:38
*/
var containsDuplicate = function(nums) {
    const set = new Set([])
    let numR = nums.length - 1
    for (let i = 0; i < nums.length >> 1; i++) {
        if (set.has(nums[i]) || set.has(nums[numR]) || nums[i] === nums[numR]) return true
        set.add(nums[i])
        set.add(nums[numR])
        numR -= 1
    }
    console.log(numR)
    if (numR * 2 !== nums.length) return set.has(nums[numR + 1])
    return false
};

console.log(containsDuplicate([1,2,3,4]))