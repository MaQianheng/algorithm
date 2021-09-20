import Array from '../ArrayExtensions/index.js'

function handlePutQueen(numRowIndex) {
    for (let i = 0; i < 8; i++) {
        arrTmp[numRowIndex] = i
        // 如果冲突，则进入到下一次循环，下一次循环会给arrTmp[numRowIndex]重新赋值，即将该行的皇后摆放至下一列
        if (funcIfConflict(numRowIndex)) continue
        // 递归结束
        if (numRowIndex === 7) {
            numCount += 1
            console.log(`<---solution ${numCount}--->`)
            // console.log(arrTmp.toString())
            const arrCoo = Array.prototype.createTwoDCoordinate(8, 8)
            handleFillCoo(arrTmp, arrCoo)
            arrCoo.twoDPrint()
            return
        }
        // 如果不冲突，递归继续到下一行摆放
        handlePutQueen(numRowIndex + 1)
    }
}

function funcIfConflict(numNewRowIndex) {
    numTmp += 1
    const numNewColIndex = arrTmp[numNewRowIndex]
    // 不需要跟自身比
    for (let i = 0; i < numNewRowIndex; i++) {
        /**
         * arrRes = [0, 4, 7, 5, 2, 6, 1, 3]
         *  explain:
         *           there is a queen on the position
         *           row 0, col 0
         *           row 1, col 4
         *           row 2, col 7
         *           row 3, col 5
         *           ...
         *           row 7, col 3
         *           it will be impossible that there are more than one queen on the same row
         * validate column:
         * arrTmp[i] === numNewColIndex
         * validate slash:
         * (numNewRowIndex - i) === Math.abs(arrTmp[numNewRowIndex] - arrTmp[i])
         */
        if (arrTmp[i] === numNewColIndex || (numNewRowIndex - i) === Math.abs(numNewColIndex - arrTmp[i])) return true
    }
    return false
}

function handleFillCoo(arrRes, arrCoo) {
    for (let i = arrRes.length - 1; i > -1; i--) {
        const numCol = arrRes[(arrRes.length - 1) - i]
        arrCoo[i][numCol] = 1
    }
}

const arrTmp = []
let numCount = 0
let numTmp = 0
// 注意⚠️：数组并没有清空
handlePutQueen(0)
console.log(numCount, numTmp)
