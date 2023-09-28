var solution = function(n) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    let left = 1, right = n
    while (left <= right) {
        const mid = calMid(left, right)
        if (isBadVersion(mid)) right = mid - 1
        else left = mid + 1
    }
    return left
};
// 4, 1
function calMid(left, right) {
    return ((right - left) >> 1) + left
}

function isBadVersion(index) {
    // console.log(index)
    if (index === 1) return true
}

console.log(solution(4))