/**
 * 输入：(3+4)*5-6转后缀表达式为：34+5*6-
 * 思路：
 *  1：从左至右扫描，将3和4压入数字栈
 *  2：遇到+运算符，因此弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈
 *  3：将5入栈
 *  4：遇到*运算符，因此弹出5和7，计算7*5=35，将35入栈
 *  5：将6入栈
 *  6：最后是-运算符，计算出35-6的值，即29
 * @param anyParam
 */

function ifNumber(anyParam) {
    return !(isNaN(anyParam))
}

function handleCal(arrNums, strOpe) {
    const num2 = arrNums.pop(), num1 = arrNums.pop()
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

function func(arrParam) {
    const arrNums = []
    for (let i = 0; i < arrParam.length; i++) {
        const strTmp = arrParam[i]
        if (ifNumber(strTmp)) arrNums.push(parseFloat(strTmp))
        else handleCal(arrNums, strTmp)
    }
}

console.log(func(['30.2', '4', '+', '5', '*', '6', '-']))
