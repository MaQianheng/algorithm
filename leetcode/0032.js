var longestValidParentheses = function(s) {
    const arrStack = []
    let numCur = 0, numMax = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            arrStack.push(s[i])
        } else {
            if (arrStack.length) {
                arrStack.pop()
                numCur += 1
            }
        }
    }
    // console.log(arrStack, numCur)
    return (numCur - arrStack.length) * 2
};

console.log(longestValidParentheses("()(()"))