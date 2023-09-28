var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const objTmp1 = {}, objTmp2 = {}
    for (let i = 0; i < s.length; i++) {
        const c1 = s[i], c2 = t[i]
        objTmp1[c1] = c2
        objTmp2[c2] = c1
    }
    console.log(objTmp1, objTmp2)
};

console.log(isAnagram("anagram", "nagaram"))