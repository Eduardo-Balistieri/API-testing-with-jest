const calculateMean = require('../../src/Math/functions').calculateMean


test('mean of total = 10 && n = 2 is equal to 5', () => {
    expect(calculateMean(10, 2)).toBe(5)
})

test('mean of total = 5 && n = 2 is equal to 2.5', () => {
    expect(calculateMean(5, 2)).toBe(2.5)
})
