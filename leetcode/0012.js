/*
* @Author: 123456
* @Date:   2022-01-05 11:09:31
* @Last Modified by:   123456
* @Last Modified time: 2022-01-05 15:04:47
*/
var intToRoman = function(num) {
    const strParam = String(num), arrRes = []
    let numTmp = '1'
    for (let i = strParam.length - 1; i > -1; i--) {
        arrRes.splice(0, 0, func((strParam[i]) * numTmp))
        numTmp += '0'
    }
    return arrRes.join('')
}

function func(numParam) {
	if (numParam > 1000) {
		let strRes = ''
		for (let i = 0; i < numParam / 1000; i++) {
			strRes += 'M'
		}
		return strRes
	}
	const objDic = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'CD',
		500: 'D',
		900: 'CM',
		1000: 'M'
	}
	// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
	// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
	// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
	// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    let arrRes = [objDic[numParam]]
    if (arrRes[0]) return arrRes.join('')
	arrRes = []
	const arrKeys = Object.keys(objDic).sort((a, b) => a - b)
	for (let i = 0; i < arrKeys.length; i++) {
		if (numParam > arrKeys[i] && numParam < arrKeys[i + 1]) {
			arrRes.push(objDic[arrKeys[i]])
			arrRes.push(func(numParam - arrKeys[i]))
		}
	}
	return arrRes.join('')
}

console.log(intToRoman(2000))