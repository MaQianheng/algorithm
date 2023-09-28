var addDigits = function(num) {
    while(num > 10) {
        const arrTmp = String(num).split('')
        num = 0
        for (let i = 0; i < arrTmp.length; i++) {
            num += Number(arrTmp[i])
        }
    }
    return num
};

console.log(addDigits(0))