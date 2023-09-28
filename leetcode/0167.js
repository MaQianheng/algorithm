/*
* @Author: 123456
* @Date:   2021-06-22 15:58:00
* @Last Modified by:   123456
* @Last Modified time: 2021-06-22 16:06:11
*/
function func (arrNums, numTarget) {
	let numLeftPointer = 0
    let numRightPointer = arrNums.length - 1
    while (numLeftPointer < numRightPointer) {
        if (arrNums[numLeftPointer] + arrNums[numRightPointer] > numTarget) {
            // 太大了，要小一点，则numRightPointer左移一位
            numRightPointer--
        } else if (arrNums[numLeftPointer] + arrNums[numRightPointer] < numTarget) {
            // 太小了，要大一点，则numLeftPointer右移一位
            numLeftPointer++
        } else {
            return [numLeftPointer + 1, numRightPointer + 1]
        }
    }
}
// 作者：jack_lzx
// 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/solution/shuang-zhi-zhen-yong-shi-chao-9959yong-h-ktpo/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(func([0,0,3,4], 0))