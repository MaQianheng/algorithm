function longestPalindrome(s) {
	let strRes = s[0]
	for (let i = 0; i < s.length; i++) {
		const strRes1 = funcCentralDiffusion(s, i, i)
		const strRes2 = funcCentralDiffusion(s, i, i + 1)
		if (strRes.length > strRes1.length && strRes.length > strRes2.length) continue
		strRes = strRes1.length >= strRes2.length ? strRes1 : strRes2
	}
	return strRes
};

function funcCentralDiffusion(strParam, numP1, numP2) {
	let numP3 = numP2 + 1
	while (true) {
		const str1 = strParam[numP1], str2 = strParam[numP2], str3 = strParam[numP3]
		if (str1 === undefined || str2 === undefined || str1 !== str2) break
		numP1--
		numP2++
	}
	if (strParam[numP1] !== strParam[numP2]) numP1++
	return strParam.slice(numP1 === -1 ? 0 : numP1, numP2)
}

// console.log(longestPalindrome("babad"))

console.log(funcCentralDiffusion("babad", 2, 2))