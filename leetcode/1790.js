var areAlmostEqual = function(s1, s2) {
 //    let numTmp = s1.length === 2 ? 0 : 1
 //    let numIndex
 //    for (let i = 0; i < s1.length; i++) {
 //        if (s1[i] !== s2[i]) {
 //        	numIndex = i
 //        	numTmp -= 1
 //        }
 //        if (numTmp === 0) {
 //        	if (s1[numIndex] !== s2[i]) return false
 //        }
 //    }
	// console.log(numTmp)
 //    return true

	const arrTmp = []
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) arrTmp.push(i)
		if (arrTmp.length === 3) return false
	}
	const [i1, i2] = arrTmp
	console.log(arrTmp)
	if (s1[i1] === s2[i2] && s1[i2] === s2[i1]) return true
	return false
};

console.log(areAlmostEqual("npv", "zpn"))