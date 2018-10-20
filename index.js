const autocalver = (input = new Date()) => {
  const year = input.getUTCFullYear()
  const month = input.getUTCMonth() + 1
  const date = input.getUTCDate()
  
  return `${year}.${month}.${date}`
}

module.exports = autocalver