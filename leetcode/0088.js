/*
* @Author: 123456
* @Date:   2021-05-14 16:22:04
* @Last Modified by:   123456
* @Last Modified time: 2021-06-22 10:02:05
*/
var merge = function(nums1, num1, arrNums2, num2) {
    nums1 = nums1.slice(0, num1).concat(arrNums2.slice(0, num2)).sort((numPre, numNex) => numPre - numNex)
    console.log(nums1)
    return nums1
}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// [1,2,3,0,0,0]
// 3
// [2,5,6]
// 3
// [1,2,3,0,0,0], 3, [2,5,6], 3