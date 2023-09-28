var wordPattern = function(pattern, s) {
    const objTmp = {}, objTmp2 = {}
    const arrTmp = s.split(' ')
    for (let i = 0; i < pattern.length; i++) {
        if ((objTmp[pattern[i]] && (objTmp[pattern[i]] !== arrTmp[i])) || (objTmp2[arrTmp[i]] && (objTmp2[arrTmp[i]] !== pattern[i]))) return false
        objTmp[pattern[i]] = arrTmp[i]
    	objTmp2[arrTmp[i]] = pattern[i]
    }
    return true
};
console.log(wordPattern("abba", "dog dog dog dog"))