/*
* @Author: 123456
* @Date:   2021-11-04 14:53:56
* @Last Modified by:   123456
* @Last Modified time: 2021-11-04 15:31:22
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
	if (!nums.length) return 0
	// 定义 dp0 第i个不接的最长时间，dp1 第i个接的最长时间
    let dp0 = 0, dp1 = nums[0]

	for (let i = 1; i < nums.length; i++){
        let tdp0 = Math.max(dp0, dp1); // 计算 dp[i][0]
        let tdp1 = dp0 + nums[i]; // 计算 dp[i][1]

        dp0 = tdp0; // 用 dp[i][0] 更新 dp_0
        dp1 = tdp1; // 用 dp[i][1] 更新 dp_1
    }
    return Math.max(dp0, dp1);
};

function func(arrNums = [2,1,4]) {
	let dp = 0
	for (let i = 0; i < arrNums.length; i++) {
		arrNums[i] = Math.max(arrNums[i], dp)
	}
}

console.log(massage([2,1,4,5,3,1,1,3]))
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/the-masseuse-lcci/solution/an-mo-shi-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。