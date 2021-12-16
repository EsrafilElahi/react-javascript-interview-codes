
Hoisting
// console.log(x)
// var x = 2
// =========================> undefined for var
// var x = undefined
// console.log(x)
// x = 2


// console.log(x)
// let x = 2
// =========================> err for let const
// let x = err
// console.log(x)
// x = 2

1
// let, const = block scope 
// var = function scope

2
// var, let = assignable
// const = can't assign

3
// var = Hoisting undefined
// let, const = Hoisting Error

// ======================================
scoping

{
    let x = 10    // error
    const y = 20  // error
    var z = 30    // 30
}

console.log(x) // error
console.log(y) // error
console.log(z) // 30