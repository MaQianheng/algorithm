var isPowerOfTwo = function(n) {
    while (true) {
        if (n % 2 !== 0) return false
        n = n / 2
        if (n === 1) return true
    }
    return true
};
console.log(isPowerOfTwo(2))