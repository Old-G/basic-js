const CustomError = require('../extensions/custom-error')

module.exports = function getSeason(date) {
  const testDate = new Date(date)

  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }

  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (
      date.getMonth() === 11 ||
      date.getMonth() === 0 ||
      date.getMonth() === 1
    ) {
      return 'winter'
    } else if (
      date.getMonth() === 2 ||
      date.getMonth() === 3 ||
      date.getMonth() === 4
    ) {
      return 'spring'
    } else if (
      date.getMonth() === 5 ||
      date.getMonth() === 6 ||
      date.getMonth() === 7
    ) {
      return 'summer'
    } else {
      return 'autumn'
    }
  } else {
    throw new 'Unable to determine the time of year!'()
  }
}
