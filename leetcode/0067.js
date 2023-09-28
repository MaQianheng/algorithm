/*
* @Author: 123456
* @Date:   2021-05-14 15:09:11
* @Last Modified by:   123456
* @Last Modified time: 2021-05-14 15:45:48
*/
var addBinary = function(a, b) {
    let strShort, strLong
    if (a.length >= b.length) {
        strLong = a
        strShort = b
    } else {
        strLong = b
        strShort = a
    }
    const numLenDiff = strLong.length - strShort.length
    let strRes = ""
    let ifCarry = false
    for (let i = strShort.length - 1; i > -1; i--) {
        let numTmp = parseInt(strShort[i]) + parseInt(strLong[i + numLenDiff])
        if (ifCarry) numTmp += 1
        if (numTmp >= 2) {
            numTmp -= 2
            ifCarry = true
        } else {
        	ifCarry = false
        }
        strRes = numTmp + strRes
        if (i === 0 && (strLong.length === strShort.length) && ifCarry) {
        	strRes = "1" + strRes
        }
    }
    const strPrefix = strLong.slice(0, strLong.length - strShort.length)
    for (let i = strPrefix.length - 1; i > -1; i--) {
    	if (!ifCarry) {
    		strRes = strPrefix.slice(0, i + 1) + strRes
    		console.log(strRes)
    		break
    	}
    	let numTmp = parseInt(strPrefix[i]) + 1
    	if (numTmp >= 2) {
            numTmp -= 2
            ifCarry = true
        } else {
        	ifCarry = false
        }
    	strRes = numTmp + strRes
    	if (i === 0 && ifCarry) {
        	strRes = "1" + strRes
        }
    }
    return strRes
};

console.log(addBinary('11', '1'))