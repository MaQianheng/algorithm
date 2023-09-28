var digitSum = function(s, k) {
	let res = s
	while (res.length > k) {
		res = func(res, k)
	}
	return res
};

function func(str, k) {
    const arrRes = []
    for (let i = 0; i < str.length; i+=k) {
    	let numTmp = 0
    	str.substr(i, k).split('').forEach((val) => {
    		numTmp += Number(val)
    	})
        arrRes.push(numTmp)
    }
    return arrRes.join('')
}

console.log(digitSum("11111222223", 3))