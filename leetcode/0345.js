var reverseVowels = function(s) {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', ])
    const arrIndexes = [], arrRes = []
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
        	arrIndexes.push(i)
        	arrRes.push(null)
        } else arrRes.push(s[i])
    }
    for (let i = 0; i < arrIndexes.length >> 1; i++) {
    	const numIndex1 = arrIndexes[i], numIndex2 = arrIndexes[arrIndexes.length - 1 - i]
    	const v1 = s[numIndex1]
    	const v2 = s[numIndex2]
    	arrRes[numIndex2] = v1
    	arrRes[numIndex1] = v2
    }
    if (arrIndexes.length % 2 === 1) {
    	const numTmp = Math.floor(arrIndexes.length/2)
    	arrRes[arrIndexes[numTmp]] = s[arrIndexes[numTmp]]
    }
    return arrRes.join('')
}
// "leotcede"
console.log(reverseVowels("race car"))