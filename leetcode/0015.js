/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arrNums) {
    /**
    标签：数组遍历
    首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i]后面的两端，数字分别为 nums[L] 和 nums[R]，计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集
    如果 nums[i]大于 0，则三数之和必然无法等于 0，结束循环
    如果 nums[i] == nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
    当 sum == 0 时，nums[L] == nums[L+1] 则会导致结果重复，应该跳过，L++
    当 sum == 0 时，nums[R] == nums[R-1] 则会导致结果重复，应该跳过，R--

    作者：guanpengchn
    链接：https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/
    来源：力扣（LeetCode）
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    */
    // if (arrNums.length === 3) {
    //     if (arrNums[0] + arrNums[1] + arrNums[2] === 0) return [[arrNums[0], arrNums[1], arrNums[2]]]
    //     else return []
    // }
    
    if (arrNums.length < 3) return []
    const arrRes = []
    arrNums = arrNums.sort((a, b) => a - b)
    console.log(arrNums)
    for (let i = 0; i < arrNums.length; i++) {
        const numCur = arrNums[i]
        if (numCur === arrNums[i - 1]) continue
        let numLP = i + 1, numRP = arrNums.length - 1
        if (numCur > 0) break
        while(numLP < numRP){
            const numL = arrNums[numLP], numR = arrNums[numRP]
            const numSum = numCur + numL + numR
            if (numSum === 0) {
                if (arrRes.length && arrRes[arrRes.length - 1][0] === numCur) {
                    if (arrRes[arrRes.length - 1][1] === numL) {
                        numLP++
                        continue
                    }
                    if (arrRes[arrRes.length - 1][2] === numR) {
                        numRP--
                        continue
                    }
                }
                arrRes.push([numCur, numL, numR])
            }
            if (numSum < 0) numLP++
            if (numSum > 0) numRP--
            if (numSum === 0) {
                numLP++
                numRP--
            }
        }
    }
    return arrRes
}
// [3,0,-2,-1,1,2]
console.log(threeSum([-1,0,1,2,-1,-4]))