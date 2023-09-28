function func(strParam) {
    const arrDp = []
    for (let i = 0; i < strParam.length; i++) {
        const numTmp = Number(strParam[i])
        arrDp[i] = 0
        if (!(isNaN(numTmp))) {
            arrDp[i] = 1
            for (let j = i - 1; j > -1; j--) {
                if (numTmp >= Number(strParam[j])) arrDp[i] = Math.max(arrDp[j] + 1, arrDp[i])
            }
        }
    }
    console.log(arrDp, Math.max(...arrDp))
}

// func('abasdf12234sdaf112')

let func1 = (arr) => {
    let len = arr.length
    let res = [] // 所有排列结果
    /**
     * 【全排列算法】
     * 说明：arrange用来对arr中的元素进行排列组合，将排列好的各个结果存在新数组中
     * @param tempArr：排列好的元素
     * @param leftArr：待排列元素
     */
    let arrange = (tempArr, leftArr) => {
        if (tempArr.length === len) { // 这里就是递归结束的地方
            // res.push(tempArr) // 得到全排列的每个元素都是数组
            res.push(tempArr.join('')) // 得到全排列的每个元素都是字符串
        } else {
            for (let i = 0; i < leftArr.length; i++) {
                const temp = []
                for (let j = 0; j < leftArr.length; j++) {
                    if (i !== j) temp.push(leftArr[j])
                }
                // 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果
                // [a], [b,c,d]
                arrange(tempArr.concat(leftArr[i]), temp) // 这里使用了递归
            }
        }
    }
    arrange([], arr)
    return res
}

console.log('结果：', func1(['A', 'B', 'C', 'D']))

function func2(arrParam) {
    const arrRes = []
    for (let i = 0; i < arrParam.length; i++) {
        const arrClone = []
        for (let j = 0; j < arrParam.length; j++) {
            if (i !== j) arrClone.push(arrParam[j])
        }
        const arrTmp = [arrParam[i]]
        // while (arrClone.length) {
        //     arrTmp.push(arrClone.splice(0, 1)[0])
        // }
        arrRes.push(helper(arrTmp, arrClone))
        // console.log()
    }
}

function helper(arr1, arr2) {
    if (!arr2.length) return arr1
    helper(arr1, arr2)
}

// func2(['A', 'B', 'C', 'D'])
