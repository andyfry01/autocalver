const autocalver = require('./index.js')
const exec = require('child_process').execFile;

const today = new Date()
const year = today.getUTCFullYear()
const month = today.getUTCMonth() + 1
const date = today.getUTCDate()

describe('autocalver tests', () => {
  describe('node module tests', () => {
    it('should exist', () => {
      const actual = typeof autocalver
      const expected = 'function'
  
      expect(actual).toBe(expected)
    })
  
    it('should return a string when called', () => {
      const output = autocalver()
      const actual = typeof output
      const expected = 'string'
  
      expect(actual).toBe(expected)
    })
  
    it('should return a correctly formatted calver date when called with no arguments', () => {
      const output = autocalver()
      const actual = output
      const expected = `${year}.${month}.${date}`
  
      expect(actual).toBe(expected)
    })
  
    it('should return a correctly formatted calver date when passed a Date object', () => {
      const input = new Date('2018-10-26')
      const output = autocalver(input)
      const actual = output
      const expected = '2018.10.26'
    
      expect(actual).toBe(expected)
    })
  
    it('should not prepend the month with a zero', () => {
      const input = new Date('2018-06-26')
      const output = autocalver(input)
      const actual = output
      const expected = '2018.6.26'
  
      expect(actual).toBe(expected)
    })
  
    it('should not prepend the day with a zero', () => {
      const input = new Date('2018-12-06')
      const output = autocalver(input)
      const actual = output
      const expected = '2018.12.6'
  
      expect(actual).toBe(expected)
    })
  })

  describe('shell command tests', () => {
    it('should return a correctly formatted calver date when called with no arguments', () => {
      exec('./bin/cli.js', (err, res) => {
        const actual = res.toString()
        const expected = `${year}.${month}.${date}`

        expect(actual).toBe(expected)
      })
    })
  })
})