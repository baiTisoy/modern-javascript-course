
const createTipper = (tip) => {
    return (bill) => {
        return bill * tip
    }
}

console.log(createTipper(.15)(100))

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)

console.log(tip20(100))
console.log(tip30(100))
// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunction()
// myPrintMessage()

// const createCounter = () => {
//     let count = 0

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         }
//     }
// }

// const counter = createCounter()

// //Adder
// const createAdder = (a) => {
//     return () => {
//         return a + b
//     }
// }

// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))