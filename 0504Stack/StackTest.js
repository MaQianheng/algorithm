/**
 * 使用栈来实现综合计算器
 * 7*2*2-5+1-5+3-3
 */

function ifNumber(anyParam) {
    return !(isNaN(anyParam))
}

function handleCal(arrNums, arrOpes) {
    const num2 = arrNums.pop(), num1 = arrNums.pop(), strOpe = arrOpes.pop()
    switch (strOpe) {
        case '+':
            arrNums.push(num1 + num2)
            break
        case '-':
            arrNums.push(num1 - num2)
            break
        case '*':
            arrNums.push(num1 * num2)
            break
        case '/':
            arrNums.push(num1 / num2)
            break
    }
    console.log(`${num1} ${strOpe} ${num2} = ${arrNums[arrNums.length - 1]}`)
}

function simpleCalculator(strParam = '7*20*2-5+1-5+3-3') {
    const objOpesPriority = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    }
    /**
     * 思路：
     * 1：循环遍历表达式
     * 2：如果当前char是数字，直接入数字栈
     * 3：如果当前char是符号：
     *      如果符号栈为空，直接入符号栈
     *      如果符号栈不为空，则进行比较，如果当前char操作符优先级小于或等于栈顶运算符，就需要从数字栈中方pop出两个数，再从符号栈中pop出一个符号进行运算，将结果入数字栈，然后当前操作符入符号栈。如果当前操作符优先级大于符号栈操作符，直接入栈
     * 4：当表达式扫描完毕，就顺序从数字栈和符号栈中pop出相应的数字和符号运算
     * 5：当数字栈中只存在一个数字时，就是表达式的结果
     * @type {*[]}
     */
    const arrNums = [], arrOpes = []
    let strTmpNum = ''
    for (let i = 0; i < strParam.length; i++) {
        const charTmp = strParam[i]
        if (ifNumber(charTmp)) strTmpNum += charTmp
        else {
            if (strTmpNum) arrNums.push(parseInt(strTmpNum))
            strTmpNum = ''
            if (arrOpes.length) {
                const numCurOpePri = objOpesPriority[charTmp],
                    numStackOpePri = objOpesPriority[arrOpes[arrOpes.length - 1]]
                if (numCurOpePri <= numStackOpePri) handleCal(arrNums, arrOpes)
            }
            arrOpes.push(charTmp)
        }
    }
    if (strTmpNum) arrNums.push(parseInt(strTmpNum))
    while (arrOpes.length !== 0) {
        handleCal(arrNums, arrOpes)
    }
    return arrNums.pop()
}

console.log(simpleCalculator())
