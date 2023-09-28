var firstUniqChar = function(s) {
    const objTmp = {}
    for (let i = 0; i < s.length; i++) {
        let strTmp = s[i]
        if (strTmp in objTmp) {
            objTmp[strTmp].numCount += 1
        } else {
            objTmp[strTmp] = {
                numIndex: i,
                numCount: 1
            }
        }
    }
    const arrKeys = Object.keys(objTmp)
    for (let i = 0; i < arrKeys.length; i++) {
        if (objTmp[arrKeys[i]].numCount === 1) {
            return objTmp[arrKeys[i]].numIndex
        }
    }
    return -1
};