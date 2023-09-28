var rearrangeCharacters = function(s, target) {
    const objTmp = {}
    for (let i = 0; i < target.length; i++) {
        objTmp[target[i]] = []
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (objTmp[char] !== undefined) objTmp[char].push(i)
    }
    let numRes = 0
    while (true) {
        for (let i = 0; i < target.length; i++) {
            if (objTmp[target[i]].length) objTmp[target[i]].pop()
            else return numRes
        }
        numRes += 1
    }
    return numRes
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code"))
