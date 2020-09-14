module.exports = function countCats(matrix) {
  return matrix.reduce(
    (prev, cur) => prev + cur.filter((e) => e === '^^').length,
    0
  )
}
