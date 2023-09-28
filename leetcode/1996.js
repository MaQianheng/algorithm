const numberOfWeakCharacters = function(properties) {
    properties.sort((arr1, arr2) => arr2[0] - arr1[0] || arr1[1] - arr2[1])
    let numRes = 0, numMaxD = properties[0][1]
    for (let i = 1; i < properties.length; i++) {
        if (numMaxD > properties[i][1]) numRes++
        else numMaxD = properties[i][1]
    }
    return numRes
}

console.log(numberOfWeakCharacters([[1,1],[2,1],[2,2],[1,2]]))