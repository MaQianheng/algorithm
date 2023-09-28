/*
* @Author: 123456
* @Date:   2021-05-14 15:54:51
* @Last Modified by:   123456
* @Last Modified time: 2021-05-14 16:01:41
*/
var climbStairs = function(n) {
	const arrDp = [0, 0, 1]
	for (let i = 0; i < n; i++) {
		arrDp[0] = arrDp[1]
		arrDp[1] = arrDp[2]
		arrDp[2] = arrDp[0] + arrDp[1]
	}
	return arrDp[2]
}

console.log(climbStairs(3))