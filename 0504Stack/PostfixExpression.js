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

/**
 * 输入：(3+4)*5-6转后缀表达式为：34+5*6-
 * 思路：
 *  1：从左至右扫描，将3和4压入数字栈
 *  2：遇到+运算符，因此弹出4和3（4为栈顶元素，3为次顶元素），计算出3+4的值，得7，再将7入栈
 *  3：将5入栈
 *  4：遇到*运算符，因此弹出5和7，计算7*5=35，将35入栈
 *  5：将6入栈
 *  6：最后是-运算符，计算出35-6的值，即29
 * @param arrParam
 */
function funcCalPostfixArr(arrParam) {
    const arrNums = []
    for (let i = 0; i < arrParam.length; i++) {
        const strTmp = arrParam[i]
        if (ifNumber(strTmp)) arrNums.push(parseFloat(strTmp))
        else handleCal(arrNums, strTmp)
    }
    return arrNums.pop()
}

/**
 * 思路：
 *  1：初始化两个栈：运算符栈和储存中间结果的辅助栈
 *  2：从左至右扫描中缀表达式
 *  3：遇到数字，入辅助栈
 *  4：遇到非数字
 *      case '(': 则直接压入运算符栈
 *      case ')': 则依次弹出符号栈栈顶元素，并入辅助栈，直到遇到左括号为止
 *      default:
 *          while循环
 *              if 运算符栈为空，或栈顶运算符为"("，或优先级比栈顶运算符高，则直接将此运算符入栈并结束循环
 *              else 将运算符栈顶元素弹出并入辅助栈
 *  5：重复步骤2-4，直到表达式的最右边
 *  6：将符号栈中剩余的运算符依次弹出并入辅助栈
 *  7：辅助栈中的元素即为中缀表达式对应的后缀表达式
 * @param strParam
 */
function funcInfixStrToPostfixArr(strParam) {
    const arrOpes = [], arrEtc = [], objOpesPriority = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    }
    let strTmp = ''
    for (let i = 0; i < strParam.length; i++) {
        const charTmp = strParam[i]
        if (ifNumber(charTmp)) strTmp += charTmp
        else {
            // 遇到非数字，如果是小数点，追加并进入下一轮循环
            if (charTmp === '.') {
                strTmp += charTmp
                continue
            }
            // 之前数字有则入栈，并清空strTmp
            if (strTmp) {
                arrEtc.push(strTmp)
                strTmp = ''
            }
            // 判断符号类型
            switch (charTmp) {
                case '(':
                    arrOpes.push(charTmp)
                    break
                case ')':
                    while (arrOpes[arrOpes.length - 1] !== '(') {
                        arrEtc.push(arrOpes.pop())
                    }
                    arrOpes.pop()
                    break
                default:
                    while (true) {
                        const strOpeTop = arrOpes[arrOpes.length - 1]
                        if (!arrOpes.length || strOpeTop === '(' || objOpesPriority[charTmp] > objOpesPriority[strOpeTop]) {
                            arrOpes.push(charTmp)
                            break
                        } else arrEtc.push(arrOpes.pop())
                    }
                    break
            }
        }
    }
    if (strTmp) arrEtc.push(strTmp)

    while (arrOpes.length) {
        arrEtc.push(arrOpes.pop())
    }
    return arrEtc
}

console.log(funcCalPostfixArr(funcInfixStrToPostfixArr('(30.322+4)*5-6')))
