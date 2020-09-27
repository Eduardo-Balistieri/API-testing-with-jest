const calculatePercentage = (num, total) => {
    const percentage = ((num / total) * 100).toFixed(1)
    return `${parseFloat(percentage)}%`
}


const calculateMean = (total, n) => {
    const mean = (total / n).toFixed(1)
    return parseFloat(mean)
}


const calculateStandartDeviation = elements => {
    let total = 0,
        delta = 0
    elements.map(element => total = total + element)

    const mean = calculateMean(total, elements.length)
    elements.map(element => delta = delta + Math.pow(element - mean, 2))

    return Math.round(Math.sqrt(delta / elements.length))
}


module.exports = { calculatePercentage, calculateMean, calculateStandartDeviation }