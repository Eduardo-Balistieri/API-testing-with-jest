const calculateStandartDeviation = require('../../src/Math/functions').calculateStandartDeviation


test('[10, 12, 23, 23] equal to 6', () => {
    expect(calculateStandartDeviation([10, 12, 23, 23])).toBe(6)
})

test('[4, 5, 10, 23, 12] equal to 7', () => {
    expect(calculateStandartDeviation([4, 5, 10, 23, 12])).toBe(7)
})

test('[10, 100] equal to 45', () => {
    expect(calculateStandartDeviation([10, 100])).toBe(45)
})
