console.log(1)
const p = new Promise((resolve, reject) => {
	console.log(2)
	resolve(3)
})
p.then(res => {
	console.log(res)
})
console.log(4)

const arr1 = [1, 2, 3]
const arr2 = arr1
arr1[0] = null
// arr1, arr2

const arr3 = [4, 5, 6]
const obj = {arr3: [...arr3]}
obj.arr3[0] = null
// arr3, obj.arr3

/**
 给你一个整数数组, 数组里每个数都是唯一的 请你返回去掉最小值和最大值以后，剩下所有数值和的平均值。
 输入：nums = [4000,3000,1000,2000]
 输出：2500
 解释：最小值和最大值分别是4000和1000 。
 去掉最小值和最大值以后的平均值是 (2000+3000)/2= 2500
 */
var average = function(nums) {}
console.log(average([4000,3000,1000,2000]))

var average = function(salary) {
    let numRes = 0, numMin = salary[0], numMax = salary[0]
    for (let i = 0; i < salary.length; i++) {
        numRes += salary[i]
        numMin = Math.min(numMin, salary[i])
        numMax = Math.max(numMax, salary[i])
    }
    return (numRes - numMin - numMax) / (salary.length - 2)
};

/**
 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 输入：nums = [2,7,11,15], target = 9
 输出：[0,1]
 解释：因为 nums[0] + nums[1] == 9，不要求下标顺序。返回[0, 1]或[1, 0]
 */
var twoSum = function(nums, target) {}
console.log(twoSum([2,7,11,15], 9))

var twoSum = function(nums, target) {
	const objTmp = {}
	for (let i = 0; i < nums.length; i++) {
		const numDiff = target - nums[i]
		if (numDiff in objTmp) return [i, objTmp[numDiff]]
		objTmp[nums[i]] = i
	}
}

// console.log(twoSum([2,7,11,15], 4))

const arr = [
	{id: '0', group: 'group1'},
	{id: '1', group: 'group1'},
	{id: '2', group: 'group2'},
	{id: '3', group: 'group1'},
	{id: '4', group: 'group2'},
	{id: '5', group: 'group2'},
	{id: '6', group: 'group3'},
	{id: '7', group: 'group3'},
	{id: '8', group: 'group3'},
	{id: '9', group: 'group1'}
]
/**
	[
	  [
	    { id: '0', group: 'group1' },
	    { id: '1', group: 'group1' },
	    { id: '3', group: 'group1' },
	    { id: '9', group: 'group1' }
	  ],
	  [
	    { id: '2', group: 'group2' },
	    { id: '4', group: 'group2' },
	    { id: '5', group: 'group2' }
	  ],
	  [
	    { id: '6', group: 'group3' },
	    { id: '7', group: 'group3' },
	    { id: '8', group: 'group3' }
	  ]
	]
 */

function func(arr) {}

function func(arr) {
	const objTmp = {}, arrRes = []
	for (let i = 0; i < arr.length; i++) {
		const {group} = arr[i]
		if (!(group in objTmp)) {
			arrRes.push([arr[i]])
			objTmp[group] = arrRes.length - 1
		} else arrRes[objTmp[group]].push(arr[i])
	}
	return arrRes
}

console.log(func(arr))