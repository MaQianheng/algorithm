/*
* @Author: 123456
* @Date:   2021-11-03 16:40:03
* @Last Modified by:   123456
* @Last Modified time: 2021-11-04 14:13:36
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(arrMatrix, numTarget) {
	if (!arrMatrix.length) return false
	if (!arrMatrix[0].length) return false
	let numRow = arrMatrix.length - 1, numCol = 0
	while (numRow >= 0 && numCol <= arrMatrix[0].length - 1) {
		const numVal = arrMatrix[numRow][numCol]
		if (numVal === numTarget) return true
		if (numVal > numTarget) numRow--
		else numCol++
	}
	return false
	// 作者：xue-ying-ling-zhu
	// 链接：https://leetcode-cn.com/problems/sorted-matrix-search-lcci/solution/jie-fa-can-kao-er-cha-sou-suo-shu-by-xue-luz9/
	// 来源：力扣（LeetCode）
	// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};

// [
// [ 5, 6,10,14],
// [ 6,10,13,18],
// [10,13,18,19]
// ]
// 14
console.log(searchMatrix([
						  [1,   4,  7, 11, 15],
						  [2,   5,  8, 12, 19],
						  [3,   6,  9, 16, 22],
						  [10, 13, 14, 17, 24],
						  [18, 21, 23, 26, 30]
						], 13))

// function funcFindTop() {}

// function funcFindLeft() {}

// function funcFindRight() {}

// function funcFindBot() {}

// function funcFind(arrMatrix, numTarget, numRow, numCol) {
// 	if (arrMatrix[numRow] === undefined) return false
// 	if (arrMatrix[numRow][numCol] === undefined) return false
// 	if (arrMatrix[numRow][numCol] === numTarget) return true
// 	if (arrMatrix[numRow][numCol] < numTarget) return funcFind(arrMatrix, numTarget, numRow, numCol + 1)
// }

// function funcFindTopRight(arrMatrix, numTarget, numRow, numCol) {
// 	if (arrMatrix[numRow] === undefined) return false
// 	if (arrMatrix[numRow][numCol] === undefined) return false
// 	if (arrMatrix[numRow][numCol] === numTarget) return true
// 	return (funcFindTopRight(arrMatrix, numTarget, numRow - 1, numCol) || funcFindTopRight(arrMatrix, numTarget, numRow, numCol + 1))
// }

// function funcFindBotLeft(arrMatrix, numTarget, numRow, numCol) {
// 	if (arrMatrix[numRow] === undefined) return false
// 	if (arrMatrix[numRow][numCol] === undefined) return false
// 	if (arrMatrix[numRow][numCol] === numTarget) return true
// 	return (funcFindBotLeft(arrMatrix, numTarget, numRow + 1, numCol) || funcFindBotLeft(arrMatrix, numTarget, numRow, numCol - 1))
// }
