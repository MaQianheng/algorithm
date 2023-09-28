/**
 
 我们将给定的数组 A 分成 K 个相邻的非空子数组 ，我们的分数由每个子数组内的平均值的总和构成。计算我们所能得到的最大分数是多少。注意我们必须使用 A 数组中的每一个数进行分组，并且分数不一定需要是整数。
 示例:
 	输入: 
 	A = [9,1,2,3,9]
 	K = 3
 	输出: 20

 	解释: 
 	A 的最优分组是[9], [1, 2, 3], [9]. 得到的分数是 9 + (1 + 2 + 3) / 3 + 9 = 20.
 	我们也可以把 A 分成[9, 1], [2], [3, 9].
 	这样的分组得到的分数为 5 + 2 + 6 = 13, 但不是最大值.

 	来源：力扣（LeetCode）
 	链接：https://leetcode-cn.com/problems/largest-sum-of-averages
 	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var largestSumOfAverages = function(arrNums, k) {
	arrNums = arrNums.sort((a, b) => a - b)
	console.log(arrNums)
	let numRes = 0
	for (let i = arrNums.length - 1; i > k - 1; i--) {
		numRes += arrNums[i]
	}
	let numTmp = 0
	for (let i = 0; i < arrNums.length - k + 1; i++) {
		numTmp += arrNums[i]
	}
	numRes += numTmp / (arrNums.length - k + 1)
	return numRes
};

console.log(largestSumOfAverages([4,1,7,5,6,2,3], 4))