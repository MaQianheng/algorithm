/*
* @Author: 123456
* @Date:   2021-09-22 10:19:24
* @Last Modified by:   123456
* @Last Modified time: 2021-09-22 10:21:45
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(numParam) {
    const set = new Set([numParam])
    let strCur = String(numParam)
    while (true) {
        const numTmp = func(strCur)
        if (set.has(numTmp)) return false
        set.add(numTmp)
        strCur = String(numTmp)
        if(numTmp === 1) return true
    }
    return false
}

function func(strParam) {
    let numRes = Math.pow(Number(strParam[0]), 2)
    for (let i = 1; i < strParam.length; i++) {
        numRes += Math.pow(Number(strParam[i]), 2)
    }
    return numRes
}

console.log(isHappy(2))