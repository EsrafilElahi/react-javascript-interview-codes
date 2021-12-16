// HOF  --> higher order function 

// const adder = (a) => {
//     return function (n) {
//         return a + n
//     }
// }
// const add5 = adder(5)
// console.log('adder :', add5(5))


const newPush = (value) => {
    return (arr) => {
        const clone = [...arr, value]
        return clone
    }
}

const push1 = newPush(5)
const arr = [1, 2, 3, 4]

console.log("arr :", arr)
console.log("push1 :", push1(arr))