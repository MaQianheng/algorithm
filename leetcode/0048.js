/*
* @Author: 123456
* @Date:   2022-02-21 15:54:08
* @Last Modified by:   123456
* @Last Modified time: 2022-02-21 16:10:07
*/

// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-image
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// [[ 7, 8, 9 ], 
//  [ 4, 5, 6 ], 
//  [ 1, 2, 3 ]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]
var rotate = function(matrix) {
	for (let i = 0; i < matrix.length >> 1; i++) {
		const tmp = matrix[i]
		matrix[i] = matrix[matrix.length - 1 - i]
		matrix[matrix.length - 1 - i] = tmp
	}
	for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
	return matrix
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))