// filter
const filter = (array, conditionFunc) => {
    if (!Array.isArray(array) || array.length === 0 || typeof conditionFunc !== 'function') { 
        return []
    }

    const result = []
    // for (const item of array) {
    for (const index in array) {
        if (conditionFunc(array[index])) {
            result.push(array[index])
        }
    }

    return result
}

const testFilter = filter([1, 2, 3, 4], function (item, index, array) {
    return item % 2 === 0
})
console.log("test filter :", testFilter)
