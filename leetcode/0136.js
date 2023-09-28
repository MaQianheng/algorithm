// function funcFindUniqueNumber(arrNums) {
// 	if (arrNums[0] === undefined || arrNums[2] === undefined) {
// 		if (arrNums[1] !== arrNums[2]) return arrNums[1]
// 	}
// 	return undefined
// }

// var singleNumber = function(arrNums) {
//     arrNums = arrNums.sort((a, b) => a - b)
//     let numLeft = arrNums[0], numLeftPointer = 1, numRight = arrNums[arrNums.length - 1], numRightPointer = arrNums.length - 2
//     console.log(arrNums)
//     while (numLeftPointer < numRightPointer) {
//     	const num1 = arrNums[numLeftPointer], num2 = arrNums[numRightPointer]
//     	console.log(num1, num2)
//     	numLeftPointer += 1
//     	numRightPointer -= 1
//     }
// }

// 任何数和 0 做异或运算，结果仍然是原来的数，即 a ⊕ 0 = a。
// 任何数和其自身做异或运算，结果是 0，即 a ⊕ a = 0。
// 异或运算满足交换律和结合律，即 a ⊕ b ⊕ a = b ⊕ a ⊕ a = b ⊕ ( a ⊕ a ) = b ⊕ 0 = b。

// 假设数组中有 2m+1 个数，其中有 mm 个数各出现两次，一个数出现一次。令 a1、 a2、 ...、 am为出现两次的 m 个数，am+1为出现一次的数。根据性质 3，数组中的全部元素的异或运算结果总是可以写成如下形式：
// ​(a1 ⊕ a1) ⊕ (a2 ⊕ a2) ⊕ ... ⊕ (am ⊕ am) ⊕ am+1
// 根据性质 2 和性质 1，上式可化简和计算得到如下结果：
// 0 ⊕ 0 ⊕ ... 0 ⊕ am+1 = am+1
// 因此，数组中的全部元素的异或运算结果即为数组中只出现一次的数字。

function func (arrNums) {
	let numRes = 0;
    for (let i = 0; i < arrNums.length; i++) {
        numRes ^= arrNums[i]
        console.log(numRes)
    }
    return numRes
}
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/single-number/solution/zhi-chu-xian-yi-ci-de-shu-zi-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(func([2,2,5,3,3]))