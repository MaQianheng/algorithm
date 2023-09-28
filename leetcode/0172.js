/*
* @Author: 123456
* @Date:   2021-09-22 09:34:56
* @Last Modified by:   123456
* @Last Modified time: 2021-09-22 09:59:30
*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(numParam) {
    let numRes = 0
    while(numParam>0) {
       // 学习其他大佬的思路，主要找出2*5的组合，每一个这样的组合就会产生一个0，但是阶乘中2出现的次数通常大于或等于5出现的次数，
       // 比如8可以分解成2*2*2。5隔五个数出现一次
       const k = numParam / 5 | 0
       console.log(k)
       numRes += k
       // 更新n的值
       numParam = k
    }
    return numRes

	// 作者：salter
	// 链接：https://leetcode-cn.com/problems/factorial-trailing-zeroes/solution/172javascript-by-fanzhanxiang/
	// 来源：力扣（LeetCode）
	// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}

console.log(trailingZeroes(30))