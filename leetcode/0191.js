var hammingWeight = function(n) {
     const strTmp = String(n)
     let numRes = 0
     for (let i = 0; i < strTmp.length; i++) {
         if (strTmp[i] === '1') numRes += 1
     }
     return numRes
};
console.log(hammingWeight('00000000000000000000000000001011'))