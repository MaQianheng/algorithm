/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let numLongest = 0
    set.forEach((item) => {
        let numCur = 1
        let numTmp = item
        while (set.has(++numTmp)) {
            numCur += 1
        }
        numLongest = Math.max(numLongest, numCur)
    })
    return numLongest
};

console.log(longestConsecutive([100,4,200,1,3,2]))