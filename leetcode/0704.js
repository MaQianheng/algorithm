// var search = function(nums, target) {
//     let low = 0, high = nums.length - 1
//     while (low <= high) {
//         const mid = Math.floor((high - low) / 2) + low
//         const num = nums[mid]
//         if (num === target) return mid
//         if (num > target) high = mid - 1
//         else low = mid + 1
//     }
//     return -1
// };

var search = function(nums, target) {
    let l = 0, r = nums.length - 1
    while (l < r) {
        const m = ((r - l) >> 1) + l
        if (nums[m] === target) return m
        if (nums[m] > target) r = m - 1
        if (nums[m] < target) l = m + 1
    }
    return -1
}

console.log(search([-1,0,2,5,9,12], 2))

