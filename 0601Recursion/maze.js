import Array from '../ArrayExtensions/index.js'

const arrMaze = Array.prototype.createTwoDCoordinate(8, 7, 0)

arrMaze.twoDSetRow(0, 1)
arrMaze.twoDSetRow(-1, 1)
arrMaze.twoDSetCol(0, 1)
arrMaze.twoDSetCol(-1, 1)
arrMaze.twoDSetVal(3, 2, 1)
arrMaze.twoDSetVal(3, 1, 1)
// arrMaze.twoDSetVal(1, 2, 1)
// arrMaze.twoDSetVal(2, 2, 1)
arrMaze.twoDPrint()

/**
 [
 [1,1,1,1,1,1,1],
 [1,0,0,0,0,0,1],
 [1,0,0,0,0,0,1],
 [1,1,1,0,0,0,1],
 [1,0,0,0,0,0,1],
 [1,0,0,0,0,0,1],
 [1,0,0,0,0,0,1],
 [1,1,1,1,1,1,1]
 ]
 * @param arrParam
 * @param numStartRow
 * @param numStartCol
 * @param numEndRow
 * @param numEndCol
 * 使用递归回溯来实现给小球找路
 * 1：arrMaze表示地图
 * 2：numRow, numCol表示从地图的那个位置出发
 * 3：如果小球能到[6][5]位置，则说明通路找到
 * 4：约定：当arrMaze[numRow][numCol]。if(0)表示改点没有走过，if(1) 是围墙, if(2) 通路可走, if(3) 该点已走过，但走不通
 * 5：在走迷宫时，需要确定一个策略：下-右-上-左。如果走不通，再回溯
 */

function handleFindWay(arrParam, numStartRow, numStartCol, numEndRow, numEndCol) {
    if (arrParam[numEndRow][numEndCol] === 2) return true
    // 其他情况
    switch (arrParam[numStartRow][numStartCol]) {
        // 当前点还没走过
        case 0: {
            // 假定该点可以走通
            arrParam[numStartRow][numStartCol] = 2
            // 下-右-上-左
            if (handleFindWay(arrParam, numStartRow + 1, numStartCol, numEndRow, numEndCol) || handleFindWay(arrParam, numStartRow, numStartCol + 1, numEndRow, numEndCol) || handleFindWay(arrParam, numStartRow - 1, numStartCol, numEndRow, numEndCol) || handleFindWay(arrParam, numStartRow, numStartCol - 1, numEndRow, numEndCol)) return true
            else {
                arrParam[numStartRow][numStartCol] = 3
                return false
            }
        }
        default:
            return false
    }
}

console.log(handleFindWay(arrMaze, 1, 1, 6, 5))

console.log('<------new maze------>')
arrMaze.twoDPrint()
