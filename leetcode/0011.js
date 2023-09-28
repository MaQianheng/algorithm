/**
 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

 输入：[1,8,6,2,5,4,8,3,7]
 输出：49 
 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/container-with-most-water
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// var maxArea = function(arrParam) {
//     let numHeightestCount = arrParam[0], arrIndex = [0]
//     for (let i = 1; i < arrParam.length; i++) {
//         if (arrParam[i] > numHeightestCount) {
//         	numHeightestCount = arrParam[i]
//         	arrIndex = []
//         }
//         if (arrParam[i] === numHeightestCount) arrIndex.push(i)
//     }
// 	let numRes = 0
// 	for (let i = 0; i < arrIndex.length; i++) {
// 		numRes = Math.max(numRes, findMax(arrIndex[i], arrParam))
// 	}
//     console.log(numRes)
// };

// function findMax(numSelfIndex, arrParam) {
// 	console.log(numSelfIndex)
// 	let numLeftP = numSelfIndex--, numRightP = numSelfIndex++, numRes = 0
// 	while(true) {
// 		if (arrParam[numLeftP] === undefined && arrParam[numRightP] === undefined) return numRes
// 		if (arrParam[numLeftP] !== undefined) {
// 			numRes = Math.max(numRes, func(arrParam, numSelfIndex, numLeftP))
// 			numLeftP--
// 		}
// 		if (arrParam[numRightP] !== undefined) {
// 			numRes = Math.max(numRes, func(arrParam, numSelfIndex, numRightP))
// 			numRightP++
// 		}
// 	}
// }

// function func(arrParam, numSelfIndex, numTargetIndex) {
// 	const numTarget = arrParam[numTargetIndex], numLength = Math.abs(numSelfIndex - numTargetIndex)
// 	return numTarget * numLength
// }

/**
水的容量取决于左右边界中低的边界和左右边界相隔的宽度
用 left 和 right 两个指针从两端向中心收缩，一边收缩一边计算 [left, right] 之间的矩形面积，取最大的面积值即是答案。
双指针技巧当中，为什么要移动较低的一边
因为矩形的高度是由 min(height[left], height[right]) 即较低的一边决定的
你如果移动较低的那一边，那条边可能会变高，使得矩形的高度变大，进而就「有可能」使得矩形的面积变大
相反，如果你去移动较高的那一边，矩形的高度是无论如何都不会变大的，所以不可能使矩形的面积变得更大

作者：angela-x
链接：https://leetcode-cn.com/problems/container-with-most-water/solution/li-yong-shuang-zhi-zhen-fa-lai-jie-jue-s-rxah/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

var maxArea = function(arrParam) {
	let numRes = 0
	for (let i = 0, j = arrParam.length - 1; i < j;) {
		const numLength = j - i
		let numMinHeight
		if (arrParam[i] < arrParam[j]) {
			numMinHeight = arrParam[i]
			i++
		} else {
			numMinHeight = arrParam[j]
			j--
		}
		numRes = Math.max(numRes, numLength * numMinHeight)
	}
	console.log(numRes)
	return numRes
};

// 作者：chen-wei-f
// 链接：https://leetcode-cn.com/problems/container-with-most-water/solution/11-sheng-zui-duo-shui-de-rong-qi-shuang-fi2zm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
maxArea([1,8,6,2,5,4,8,3,7])