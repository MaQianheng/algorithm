const numIslands = (grid) => {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count += 1
                func(i, j, grid)
            }
        }
    }
    console.log(grid)
    return count
}

function func(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return
    grid[i][j] = '0'
    func(i, j + 1, grid)
    func(i, j - 1, grid)
    func(i + 1, j, grid)
    func(i - 1, j, grid)
}

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))

// 作者：chen-wei-f
// 链接：https://leetcode-cn.com/problems/number-of-islands/solution/200-dao-yu-shu-liang-bing-cha-ji-by-chen-1az1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。