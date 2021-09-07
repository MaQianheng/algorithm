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

function simpleCalculator(strParam = '7*2*2-5+1-5+3-3') {
    const objOpesPriority = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    }
    const arrNums = [], arrOpes = []
    for (let i = 0; i < strParam.length; i++) {
        const charTmp = strParam[i]
        if (ifNumber(charTmp)) arrNums.push(parseInt(charTmp))
        else {
            if (arrOpes.length) {
                const numCurOpePri = objOpesPriority[charTmp],
                    numStackOpePri = objOpesPriority[arrOpes[arrOpes.length - 1]]
                if (numCurOpePri <= numStackOpePri) handleCal(arrNums, arrOpes)
            }
            arrOpes.push(charTmp)
        }
    }
    while (arrOpes.length) {
        handleCal(arrNums, arrOpes)
    }
    return arrNums.pop()
}

console.log(simpleCalculator())
