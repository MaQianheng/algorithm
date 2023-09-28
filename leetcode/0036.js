/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const arrRow = [], arrCol = [], arrSub = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const {setRow, setCol, setSub} = getSet(i, j, arrRow, arrCol, arrSub)
            const val = board[i][j]
            if (val === '.') continue
            if (validateRes(val, setRow, setCol, setSub) === false) {
                console.log(i, j, val, setRow, setCol, arrSub, setSub)
                return false
            }
        }
    }
    return true
};

function getSet(i, j, arrRow, arrCol, arrSub) {
    if (!arrRow[i]) arrRow[i] = new Set([])
    if (!arrCol[j]) arrCol[j] = new Set([])
    const numIndex = Math.floor(j / 3)
    if ((i % 3 === 0) && (j % 3 === 0)) arrSub[numIndex] = new Set([])
    return {setRow: arrRow[i], setCol: arrCol[j], setSub: arrSub[numIndex]}
}

function validateRes(val, setRow, setCol, setSub) {
    if (setRow.has(val) || setCol.has(val) || setSub.has(val)) return false
    setRow.add(val)
    setCol.add(val)
    setSub.add(val)
}

/**
[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]
[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5]
[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]
 */

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))

const arr = [
    [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8]],
    [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8]],
    [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8]],
    [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8]],
    [[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8]],
    [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8]],
    [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8]],
    [[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8]],
    [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8]]
]