var maximalSquare = function(matrix) {
    const arrRes = []
    for (let i = 0; i < matrix.length; i++) {
        arrRes.push([])
        for (let j = 0; j < matrix[i].length; j++) {
        	if (matrix[i][j] === '1') {
        		if (i === 0 || j === 0) arrRes[i][j] = 1
	            else {
	            	arrRes[i].push(Math.min(Math.min(arrRes[i - 1][j], arrRes[i][j - 1]), arrRes[i - 1][j - 1]) + 1)
	            }
        	}
        }
    }
    console.log(arrRes)
};

maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])