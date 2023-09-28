/*
* @Author: 123456
* @Date:   2021-08-06 14:40:46
* @Last Modified by:   123456
* @Last Modified time: 2021-08-06 16:23:34
*/
const maxSlidingWindow = function(arrNums, k) {
	if (k === 1) return arrNums

	let {numMax, numMaxNumberIndex} = funcFindMaxNumberAndIndex(arrNums.slice(0, k))
    const arrRes = [numMax]

    if (k === arrNums.length) return arrRes

    for (let i = 1; i < arrNums.length; i++) {
    	if (numMaxNumberIndex < i) {
    		const objTmp = funcFindMaxNumberAndIndex(arrNums.slice(i, i + k))
    		numMax = objTmp.numMax
    		numMaxNumberIndex = objTmp.numMaxNumberIndex
    	} else {
    		if (arrNums[i + k  - 1] >= numMax) {
    			numMax = arrNums[i + k - 1]
    			numMaxNumberIndex = i + k - 1
    		}
    	}

        arrRes.push(numMax)
        if (i + k === arrNums.length) break
    }
	return arrRes
};

function funcFindMaxNumberAndIndex(arrParam) {
	let numMax = arrParam[0], numMaxNumberIndex = 0
	for (let i = 0; i < arrParam.length; i++) {
		if (arrParam[i] > numMax) {
			numMax = arrParam[i]
			numMaxNumberIndex = i
		}
	}
	return {numMax, numMaxNumberIndex}
}

// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

// console.log(maxSlidingWindow([1, -1], 1))

// console.log(maxSlidingWindow([9, 11], 2))

// [7, 2], [2, 4]
// console.log(maxSlidingWindow([7, 2, 4], 2))

// [9,9,10,10,10,10,10,10,10,9,9,9,8,8]
console.log(maxSlidingWindow([-6,-10,-7,-1,-9,9,-8,-4,10,-5,2,9,0,-7,7,4,-2,-10,8,7], 7))

function funcPrintSlidingWindow(arrParam, k) {
	for (let i = 0; i < arrParam.length; i++) {
		console.log(arrParam.slice(i, i + k))
		if (i + k === arrParam.length) break
	}
}

// funcPrintSlidingWindow([-6,-10,-7,-1,-9,9,-8,-4,10,-5,2,9,0,-7,7,4,-2,-10,8,7], 7)

// const maxSlidingWindow2 = function(arrNums, k) {
// 	if (k === 1) return arrNums

// 	let numMax = Math.max(...arrNums.slice(0, k))
//     const arrRes = [numMax], arrQ = [numMax]

//     if (k === arrNums.length) return arrRes

//     for (let i = 1; i < arrNums.length; i++) {
//         if (i + k === arrNums.length) break
//     }
// 	return arrRes
// };
