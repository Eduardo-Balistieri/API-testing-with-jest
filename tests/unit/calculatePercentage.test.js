const calculatePercentage = require('../../src/Math/functions').calculatePercentage


test('num = 2 && total = 10 is equal to 20%', () => {
    expect(calculatePercentage(2, 10)).toBe('20%')
})

test('num = 47 && total = 250 is equal to 18.8%', () => {
    expect(calculatePercentage(47, 250)).toBe('18.8%')
})

test('num = 30 && total = 90 is equal to 33.3', () => {
    expect(calculatePercentage(30, 90)).toBe('33.3%')
})