// 3
// [1,2,3,4,5,6,7]
// 0 -> 0 + 3 = 3
// 3 -> 3 + 3 = 6
// 6 -> (6 + 3) % 7 = 2
// 2 -> 2 + 3 = 5
// 5 -> (5 + 3) % 7 = 1
// 1 -> 1 + 3 = 4
// 4 -> 4 + 3 = 7

var rotate = function(nums, k) {
	// let index = 0, numPre = nums[index]
	// for (let i = 0; i < nums.length; i++) {
	// 	let numNewIndex = index + k
	// 	if (numNewIndex >= nums.length) numNewIndex %= nums.length
	// 	const numTmp = nums[numNewIndex]
	// 	nums[numNewIndex] = numPre
	// 	numPre = numTmp
	// 	index = numNewIndex
	// 	if (numNewIndex === 0) numNewIndex += 1
	// 	console.log(numNewIndex)
	// }
	// console.log(nums)
	
	k %= nums.length
	rev(nums, 0, nums.length - 1)
	rev(nums, 0, k - 1)
	rev(nums, k, nums.length - 1)
	console.log(nums)
};

function rev(nums, left, right) {
	while (left <= right) {
		[nums[left], nums[right]] = [nums[right], nums[left]]
		left += 1
		right -= 1
	}
}

rotate([-1, -100, 3, 99], 2)
// [3,99,-1,-100]
// 0 -> 0 + 2 = 2
// 2 -> (2 + 2) % 4 = 0
// 0 -> 