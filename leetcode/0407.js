/*
* @Author: 123456
* @Date:   2021-11-03 15:45:20
* @Last Modified by:   123456
* @Last Modified time: 2021-11-03 15:46:31
*/
/**
 * @param {number[][]} arrHeightMap
 * @return {number}
 */
var trapRainWater = function(arrHeightMap) {
    let numCount = 0
    // [[1,4,3,1,3,2],
    //  [3,2,1,3,2,4],
    //  [2,3,3,2,3,1]]

    // [[3,3,3,3,3],
    //  [3,2,2,2,3],
    //  [3,2,1,2,3],
    //  [3,2,2,2,3],
    //  [3,3,3,3,3]]

    // [[3,3,3,3,3],
    //  [3,2,3,2,3],
    //  [3,3,3,3,3]]
    for (let i = 1; i < arrHeightMap.length - 1; i++) {
        for (let j = 1; j < arrHeightMap[i].length - 1; j++) {
            numCount += funcGetHeight(arrHeightMap, i, j)
        }
    }
    return numCount
};

function funcGetHeight(arrHeightMap, numRow, numCol) {
    const numDiff = Math.min(arrHeightMap[numRow - 1][numCol], arrHeightMap[numRow][numCol - 1], arrHeightMap[numRow][numCol + 1], arrHeightMap[numRow + 1][numCol]) - arrHeightMap[numRow][numCol]
    return numDiff < 0 ? 0 : numDiff 
}

console.log(trapRainWater([[3,3,3,3,3],
					       [3,2,2,2,3],
					       [3,3,3,3,3]]))