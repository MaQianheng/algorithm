var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = calMid(left, right)
        const numTmp = nums[mid]
        if (numTmp === target) return mid
        if (numTmp > target) right = mid - 1
        else left = mid + 1 
    }
    return left
};

function calMid(left, right) {
    return ((right - left) >> 1) + left
}