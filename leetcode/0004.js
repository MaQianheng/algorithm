/*
* @Author: 123456
* @Date:   2021-08-17 11:05:15
* @Last Modified by:   123456
* @Last Modified time: 2021-08-17 11:37:30
*/
function findMedianSortedArrays(nums1, nums2) {
    const numLength = Math.max(nums1.length, nums2.length) + 1
    let arrRes = [], numP1 = 0, numP2 = 0
    for (let i = 0; i < numLength; i++) {
        const num1 = nums1[numP1] === undefined ? Infinity : nums1[numP1], num2 = nums2[numP2] === undefined ? Infinity : nums2[numP2]
        console.log(num1, num2)
        if (num1 <= num2) {
            arrRes.push(num1)
            numP1++
        }
        if (num2 < num1) {
            arrRes.push(num2)
            numP2++
        }
        if (num1 === Infinity) {
        	arrRes = arrRes.concat(nums2.slice(numP2))
        	numP2 = nums2.length
        	break
        }
        if (num2 === Infinity) {
        	arrRes = arrRes.concat(nums1.slice(numP1))
        	numP1 = nums1.length
        	break
        }
    }
    if (numP1 < nums1.length) {
    	arrRes = arrRes.concat(nums1.slice(numP1))
    }
    
    if (numP2 < nums2.length) {
    	arrRes = arrRes.concat(nums2.slice(numP2))
    }

    return funcFindMid(arrRes)
};

function funcFindMid(arrParam) {
	console.log(arrParam)
	if (arrParam.length % 2 === 0) {
		let numIndex = arrParam.length / 2
		return (arrParam[numIndex - 1] + arrParam[numIndex]) / 2
	}
	return arrParam[Math.floor(arrParam.length / 2)]
}

// console.log(findMedianSortedArrays([1,2,3,5,6,7], [3,4]))

console.log(findMedianSortedArrays([1,2], [3,4]))