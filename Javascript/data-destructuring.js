const num = [1, 2, 3, 4]

const [a, b, ...rest] = num

console.log(a, b, rest)

// ============================

const user = {
    name: 'eliot',
    age: 23
}

const {name} = user

console.log(name)