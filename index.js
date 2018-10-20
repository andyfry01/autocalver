const autocalver = (date = new Date()) => {
  const thisMonth = date.getUTCMonth() + 1
  const thisDate = date.getUTCDate()
  const thisYear = date.getUTCFullYear()

  return `${thisYear}.${thisMonth}.${thisDate}`
}

module.exports = autocalver