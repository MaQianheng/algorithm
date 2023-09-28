var containsNearbyDuplicate = function(nums, k) {
    const objTmp = {}
    for (let i = 0; i < nums.length; i++) {
        const numTmp = nums[i]
        if (!(numTmp in objTmp)) objTmp[numTmp] = i
    	else {
    		if (Math.abs(i - objTmp[numTmp]) <= k) return true
        	else objTmp[numTmp] = i
    	}
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,1,1], 1))