/**
 *
 * 如下所示3行4列二维坐标系
     [[0,0,0,0],
     [0,0,0,0],
     [0,0,0,0]]
 * @param numRow: the length of row
 * @param numCol: the length of col
 * @param anyFill: any initial fill value
 * @returns {[]}
 */
export function twoDCoordinate (numRow, numCol, anyFill = 0) {
    const arrRes = []
    for (let i = 0; i < numRow; i++) {
        arrRes.push(new Array(numCol).fill().map(() => anyFill))
    }
    return arrRes
}

export function twoDGetSize() {
    return [this.length, this[0] ? this[0].length : 0]
}

export function twoDPrint() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i].toString())
    }
}

export function twoDGetRow(numRow) {
    return this[numRow]
}

export function twoDGetCol(numCol) {
    const arrRes = []
    for (let i = 0; i < this.length; i++) {
        arrRes.push(this[i][numCol])
    }
    return arrRes
}

export function twoDSetRow(numRow, anyVal) {
    if (numRow < 0) numRow = this.length + numRow
    for (let i = 0; i < this[numRow].length; i++) {
        this[numRow][i] = anyVal
    }
    return this[numRow]
}

export function twoDSetCol(numCol, anyVal) {
    for (let i = 0; i < this.length; i++) {
        this[i][numCol < 0 ? this[i].length + numCol : numCol] = anyVal
    }
    return this.twoDGetCol(numCol)
}

export function twoDSetVal(numRow, numCol, anyVal) {
    this[numRow][numCol] = anyVal
}

/**
 *
 * 如下所示3行4列二维坐标系
     [[0,0,0,0],
     [0,0,0,0],
     [0,0,0,0]]
 * 输入：0， 1。外围第0层被填充为1
    [[1,1,1,1],
     [1,0,0,1],
     [1,1,1,1]]
 * @param numIndex: 层数
 * @param anyVal
 */
export function twoDFenceFill(numIndex, anyVal) {
    const [numRow, numCol] = this.twoDGetSize()
    const numLen = this[numIndex].length - (numIndex - 1)
    console.log(numRow, numCol, numLen)
}
