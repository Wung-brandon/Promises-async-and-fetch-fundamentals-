// function fakeRequest(url){
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random() * 11)
//         console.log(rand)
//         setTimeout(() =>{
//             if (rand < 4){
//                 resolve('request succeeded with number')
//             }
//             else{
//                 reject('request failed with number')
//             }
            
//         }, 1000)
//     })
// }

// urls = 'http://www.amazon.com'
// const req = fakeRequest(urls).then((data) => {
//     console.log('done with request!!!')
//     console.log('data is:', data)
// }).catch((err) => {
//     console.log('oh no:', err)
// })
// console.log(req)


function delayedColorChange(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()  
        }, delay)
        
    })

}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('magenta', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('teal', 1000))
//     .then(() => delayedColorChange('indigo', 1000))

// Async function and await
async function rainbow(){
    await delayedColorChange('orange', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('magenta', 1000)
    await delayedColorChange('teal', 1000)
    await delayedColorChange('red', 1000)
    await delayedColorChange('yellow', 1000)
    console.log("hello")
}

// rainbow()
// async function hello(){
//     return "brandon"
// }

// hello().then((data) => {
//     console.log("promise accepted", data)
// }).catch((err) => {
//      console.log("promise rejected", err)
// })

// function login(username, password){
//     if(!username || !password) throw 'missing credentials'
//     if(password === 'wung') return 'welcome'
//     throw 'invalid password'
// }

// login('boris', 'wung').then(msg => {
//     console.log('logged in')
//     console.log(msg)
// }).catch(err => {
//     console.log(err)
// })

function fakeRequest(url){
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500
        setTimeout(() => {
            if (delay > 4000){
                reject('Connection timeout')
            }
            else{
                resolve(`Here is your fake data from ${url}`)
            }
        })
    })
}

async function makeTwoRequests(){
    try {
        let data1 = await fakeRequest('/page1')
        let data2 = await fakeRequest('/page2')
        console.log(data1)
        console.log(data2)
    }
    catch(e){
        console.log('Caught an error')
        console.log(e)
    }
}

makeTwoRequests()