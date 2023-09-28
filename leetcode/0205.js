var isIsomorphic = function(s, t) {
    const obj1 = {}
    const obj2 = {}
    for (let i = 0; i < s.length; ++i) {
        const x = s[i], y = t[i]
        if ((obj1[x] && obj1[x] !== y) || (obj2[y] && obj2[y] !== x)) return false
        obj1[x] = y
        obj2[y] = x
    }
    console.log(obj1, obj2)
    return true
}
console.log(isIsomorphic("paperp", "titlet"))