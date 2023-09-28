/*
* @Author: 123456
* @Date:   2022-02-16 09:23:55
* @Last Modified by:   123456
* @Last Modified time: 2022-02-16 09:29:18
*/

/**
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 *
 * @param      {<type>}  nums    The nums
 */
var lengthOfLIS = function(nums) {
	const arrRes = []
	for (let i = 0; i < nums.length; i++) {
		arrRes[i] = 1
		for (let j = i; j > -1; j--) {
			if (nums[j] < nums[i]) {
				arrRes[i] = Math.max(arrRes[j] + 1, arrRes[i])
			}
		}
	}
	return Math.max(...arrRes)
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))