/**
 * @param {string[]} arrParam
 * @return {string[][]}
 */
var groupAnagrams = function(arrParam) {
    const objTmp = {}
    for (let i = 0; i < arrParam.length; i++) {
        const numTmp = func(arrParam[i])
        if (!(numTmp in objTmp)) objTmp[numTmp] = []
        objTmp[numTmp].push(arrParam[i])
    }
    return Object.values(objTmp)
};

function func(strParam) {
    let arrRes = []
    for (let i = 0; i < strParam.length; i++) {
        arrRes.push(strParam[i].charCodeAt())
    }
    return arrRes.sort((a, b) => a - b).join('')
}