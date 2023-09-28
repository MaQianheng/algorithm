var calculate = function(s) {
    s = s.trim()
    const arrStack = []
    let opePre = '+', numTmp = 0
    for (let i = 0; i < s.length; i++) { 
        const charCur = s[i]
        if (charCur === ' ') continue
        if (!isNaN(charCur)) numTmp = numTmp * 10 + Number(charCur)
        if (isNaN(charCur) || i === s.length - 1) {
            switch(opePre) {
                case '+':
                    arrStack.push(Number(numTmp))
                    break
                case '-':
                    arrStack.push(-Number(numTmp))
                    break
                case '*':
                    arrStack.push(arrStack.pop() * numTmp)
                    break
                case '/':
                    arrStack.push((arrStack.pop() / numTmp) | 0)
                    break
            }
            opePre = charCur
            numTmp = 0
        }
    }
    let numRes = arrStack[0]
    for (let i = 1; i < arrStack.length; i++) {
        numRes += arrStack[i]
    }
    return numRes
};

console.log(calculate(" 3/2 "))