function func() {
    const count = 13, arrIds = '3,3,7,4,4,4,4,7,7,3,5,5,5'.split(','),
        arrGrades = '53,80,68,24,39,76,66,16,100,55,53,80,55'.split(',')
    const objGrades = {}
    for (let i = 0; i < count; i++) {
        const strId = arrIds[i], strGrade = arrGrades[i]
        if (!(strId in objGrades)) objGrades[strId] = []
        objGrades[strId].push(Number(strGrade))
    }
    const arrTmp = Object.keys(objGrades), objTmp = {}
    for (let i = 0; i < arrTmp.length; i++) {
        const strId = arrTmp[i]
        let arrPlayerGrade = objGrades[strId]
        if (arrPlayerGrade.length < 3) continue
        let numTotal = 0
        arrPlayerGrade = arrPlayerGrade.sort((a, b) => b - a).slice(0, 3)
        for (let j = 0; j < arrPlayerGrade.length; j++) {
            numTotal += arrPlayerGrade[j]
        }
        if (!(numTotal in objTmp)) objTmp[numTotal] = []
        objTmp[numTotal].push(strId)
    }
    let strRes = ''
    const arrSorted = Object.keys(objTmp).map(Number).sort((a, b) => b - a)
    arrSorted.forEach((strGrade, index) => {
        const arrPlayerIds = objTmp[strGrade]
        if (arrPlayerIds.length === 1) strRes += `${arrPlayerIds[0]}`
        else strRes += arrPlayerIds.sort((a, b) => b - a).join(',')
        if (index !== arrSorted.length - 1) strRes += ','
    })
    console.log(strRes)
    // const objTmp = {}
    // Object.keys(objGrades).forEach((strId) => {
    //     const numGrade = objGrades[strId]
    //     if (!(numGrade in objTmp)) objTmp[numGrade] = []
    //     objTmp[numGrade].push(strId)
    // })
    // const arrRes = []
    // Object.keys(objTmp).sort((a, b) => b - a).forEach(() => {
    // })
}

// 2
// 1 1
// 2 2
function func1(numMachines, arrMachinesConfig) {
    const arrTmp = []
    for (let i = 0; i < arrMachinesConfig.length; i++) {
        const [numConfig] = arrMachinesConfig[i]
        if (!numConfig) {
            // console.log(arrMachinesConfig, i)
            arrTmp.push(arrMachinesConfig.splice(i--, 1)[0])
        }
    }
    arrMachinesConfig = arrMachinesConfig.sort((arr1, arr2) => {
        const numRun1 = arr1[1], numRun2 = arr2[1]
        if (numRun1 === numRun2) return arr2[0] - arr1[0]
        return numRun2 - numRun1
    })
    arrMachinesConfig = [...arrTmp.sort((a, b) => b[1] - a[1]), ...arrMachinesConfig]
    let numRes = 0
    const arrMachineRemainingTasks = []
    for (let i = 0; i < arrMachinesConfig.length; i++) {
        const [numConfig, numRun] = arrMachinesConfig[i]
        numRes += numConfig
        if (i !== 0) {
            for (let j = 0; j < arrMachineRemainingTasks.length; j++) {
                arrMachineRemainingTasks[j] -= numRun
            }
        }
        arrMachineRemainingTasks[i] = numRun
    }
    // console.log(numRes, arrMachineRemainingTasks)
    console.log(numRes + Math.max(...arrMachineRemainingTasks))
}

func1(2, [[0, 2], [0, 10], [1, 5], [3, 2]])
// func1(3, [[1, 8], [2, 2], [1, 8]])

function func2(arr1, arr2, numPair) {
    let numRes = 0, numIndex1 = -1, numIndex2 = -1, arr = []
    while (numPair !== 0) {
        // numRes += arr1[++numIndex1] + arr2[++numIndex2]
        // if (numIndex1 === numIndex2) numIndex2 -= 1
        arr.push([{v: arr1[++numIndex1], i: numIndex1}, {v: arr2[++numIndex2], i: numIndex2}])
        numPair -= 1
    }
    console.log(arr)
}
// 两对元素如果对应于arr1，arr2中的两个下标均相同，则视为同一对元素
// func2([1, 1, 2], [1, 2, 3], 2)
