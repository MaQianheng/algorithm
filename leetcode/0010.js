var isMatch = function(s, p) {
    let index = 0
    for (let i = 0; i < p.length; i++) {
        switch(p[i]) {
            case '.':
                index += 1
                break
            case '*': {
                const nex = p[i + 1], pre = p[i - 1]
                while (s[index] !== nex) {
                    if (pre !== '.' && s[index] !== pre) return false
                    index += 1
                }
                break
            }
            default:
                if (p[i] !== s[index]) return false
                index += 1
                break
        }
    }
    return index === s.length
};

console.log(isMatch("aab", "c*a*b"))