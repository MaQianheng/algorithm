// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积
// import {arrayMax} from "../../FE/etc/js/three.js/three.js-master/src/utils";

/**
 matrix = [
 ["1","0","1","0","0"],
 ["1","0","1","1","1"],
 ["1","1","1","1","1"],
 ["1","0","0","1","0"]]
 4
 */
const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "1", "0", "1"]]

function func(arrMatrix) {
    let numMax = -Infinity
    for (let i = 1; i < arrMatrix.length; i++) {
        for (let j = 1; j < arrMatrix[i].length; j++) {
            if (arrMatrix[i][j] === '1') arrMatrix[i][j] = Math.min(arrMatrix[i - 1][j], arrMatrix[i - 1][j - 1], arrMatrix[i][j - 1]) + 1
            numMax = Math.max(arrMatrix[i][j], numMax)
        }
    }
    return Math.pow(numMax, 2)
}

console.log(func(matrix))
