var summaryRanges = function(nums) {
    const arrRes = []
    let numIndex = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] + 1 === nums[i]) continue
        arrRes.push(genStrRange(nums[numIndex], nums[i - 1]))
        numIndex = i
    }
    if (numIndex !== nums.length) arrRes.push(genStrRange(nums[numIndex], nums[nums.length - 1]))
    return arrRes
};

function genStrRange(num1, num2) {
	if (num1 === num2) return String(num1)
    return `${num1}->${num2}`
}
// console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,7,8,9]))