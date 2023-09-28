/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const arrRes = []
    for (let i = 0; i < grid.length; i++) {
        arrRes.push([])
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0) {
                arrRes[i][j] = (arrRes[i][j - 1] || 0) + grid[i][j]
                continue
            }
            if (j === 0) {
                arrRes[i][j] = (arrRes[i - 1][j] || 0) + grid[i][j]
                continue
            }
            arrRes[i][j] = Math.min(arrRes[i - 1][j], arrRes[i][j - 1]) + grid[i][j]
        }
    }
    const arrTmp = arrRes[arrRes.length - 1]
    return arrTmp[arrTmp.length - 1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))