// first-class entity

const hello = () => {
    console.log('hello f-c')
}

function say(handler) {
    handler()

    return function () {
        console.log('goodbye f-c')
    }
}

console.log(say(hello)())



