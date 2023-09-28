var missingNumber = function(nums) {
    const set = new Set([])
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums.length) continue
        set.add(nums[i])
    }
    for (let i = 0; i < nums.length + 1; i++) {
    	if (!set.has(i)) return i 
    }
};
console.log(missingNumber([0]))