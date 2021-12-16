// reduce

const number = [2, 4, 7, 2, 5, 8, 5, 6, 4, 2, 4, 7, 2, 8, 4, 2, 5];
const numReduce = (num) => {
    return number.reduce((acc, val) => val === num ? ++acc : acc, 0)
}
console.log('numReduce :', numReduce(4)
)
