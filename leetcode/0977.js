var sortedSquares = function(nums) {
    let left = 0, right = p = nums.length - 1
    const arrRes = []
    while (left <= right) {
        const numLeft = Math.abs(nums[left]), numRight = Math.abs(nums[right])
        if (numLeft > numRight) {
            arrRes[p] = Math.pow(numLeft, 2)
            left += 1
        } else {
            arrRes[p] = Math.pow(numRight, 2)
            right -= 1
        }
        p -= 1
    }
    return arrRes
};