// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('This is my promise error')
//     }, 2000)
// })



const getDataPromise = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is my success data: ${data}`)
            //reject('This is my promise error')
        }, 2000)
    })
}

const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})