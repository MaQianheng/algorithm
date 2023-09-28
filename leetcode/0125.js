/*
* @Author: 123456
* @Date:   2021-06-23 09:20:25
* @Last Modified by:   123456
* @Last Modified time: 2021-06-23 09:40:07
*/
var isPalindrome = function(strParam) {
    if (!strParam) return true
	let numLeftPointer = 0, numRightPointer = strParam.length - 1
	while (numLeftPointer < numRightPointer) {
		let strLeft = strParam[numLeftPointer], strRight = strParam[numRightPointer]
		const ifLeftSymbol = /[^a-zA-Z0-9]/.test(strLeft), ifRightSymbol = /[^a-zA-Z0-9]/.test(strRight)
		if (ifLeftSymbol && ifRightSymbol) {
			numLeftPointer += 1
			numRightPointer -= 1
			continue
		}
		if (ifLeftSymbol) {
			numLeftPointer += 1
			continue
		}
		if (ifRightSymbol) {
			numRightPointer -= 1
			continue
		}
		numLeftPointer += 1
		numRightPointer -= 1
		console.log(numLeftPointer, numRightPointer, ifLeftSymbol, strLeft, strRight)
		if (strLeft.toLowerCase() !== strRight.toLowerCase()) return false
	}
	return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))