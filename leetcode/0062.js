/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arrRes = []
    for (let i = 0; i < m; i++) {
        arrRes.push([])
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) arrRes[i][j] = 1
            else arrRes[i][j] = arrRes[i][j - 1] + arrRes[i - 1][j]
        }
    }
    return arrRes.at(-1).at(-1)
};