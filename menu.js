module.exports = {
    threeItems: {
        min: 0,
        max: 3,
        values: [1, 2, 3]
    },
    sixItems: {
        min: 0,
        max: 6,
        values: [1, 2, 3, 4, 5, 6]
    },
    twelveItems: {
        min: 0,
        max: 12,
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    thirtyItems: {
        min: 0,
        max: 30,
        values: Array.from(Array(30)
            .keys())
    }
}
