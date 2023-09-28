// var permute = function(nums) {
//     const arrRes = []
//     const backtrack = (path) => {
//         if(path.length === nums.length) {
//             arrRes.push(path)
//             return 
//         }
//         nums.forEach(n => {
//             // 防止重复
//             if(!path.includes(n)) backtrack([...path, n])
//         })
//     }
//     backtrack([])
//     return arrRes
// }

// console.log(permute([1,2,3]))

function func(arrParam) {
    const arrRes = []
    const helper = (arrTmp) => {
        if (arrTmp.length === arrParam.length) {
            arrRes.push(arrTmp.join(''))
            return
        }
        for (let i = 0; i < arrParam.length; i++) {
            if (!(arrTmp.includes(arrParam[i]))) helper([...arrTmp, arrParam[i]])
        }
    }
    helper([])
    return arrRes
}
console.log(func(['a','b','c','d']))