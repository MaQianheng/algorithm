var floodFill = function(image, sr, sc, newColor) {
    const arr = [[sr, sc]], oldColor = image[sr][sc]
    while(arr.length) {
        const len = arr.length
        for (let i = 0; i < len; i++) {
            const [x, y] = arr.shift()
            // top
            if (image[x - 1] && image[x - 1][y] !== undefined && image[x - 1][y] === oldColor) arr.push([x - 1, y])
            // down
            if (image[x + 1] && image[x + 1][y] !== undefined && image[x + 1][y] === oldColor) arr.push([x + 1, y])
            // left
            if (image[x] && image[x][y - 1] !== undefined && image[x][y - 1] === oldColor) arr.push([x, y - 1])
            // right
            if (image[x] && image[x][y + 1] !== undefined && image[x][y + 1] === oldColor) arr.push([x, y + 1])
            image[x][y] = newColor
        }
    }
    return image
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))