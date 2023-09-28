var threeSumClosest = function(arrNums, numTarget) {
    arrNums = arrNums.sort((a, b) => a - b)
    let numMinDiff = Infinity, numMinDiffIndex = 0
    for (let i = 0; i < arrNums.length; i++) {
        const numCur = arrNums[i]
        let numTmpDiff = numCur - numTarget
        if (numTmpDiff > 0 && numTmpDiff > numMinDiff) break
        if (numTmpDiff < 0) numTmpDiff = -numTmpDiff
        if (numTmpDiff < numMinDiff) {
            numMinDiff = numTmpDiff
            numMinDiffIndex = i
        }
    }
    const arrNew = arrNums.slice((numMinDiffIndex - 3) < 0 ? 0 : (numMinDiffIndex - 3), numMinDiffIndex + 3)
    console.log(arrNew, numMinDiffIndex)
}

console.log(threeSumClosest([-1,2,1,-4,9,34,2,1,3,-3,4,-2,0], 1))