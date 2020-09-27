module.exports = function countCats(matrix) {
  return matrix.reduce((a, b) => a + b.filter((cat) => cat === '^^').length, 0)
}
