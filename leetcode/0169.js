/*
* @Author: 123456
* @Date:   2021-06-23 09:49:16
* @Last Modified by:   123456
* @Last Modified time: 2021-06-23 10:03:33
*/
var majorityElement = function(arrNums) {
    arrNums = arrNums.sort((a, b) => a - b)
    return arrNums[Math.floor(arrNums.length / 2)]
}

console.log(majorityElement([2,2,1,1,1,2,2]))