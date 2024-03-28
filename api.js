// api and methods of fetching data
// this method does not supports promises

// const req = new XMLHttpRequest()
// var url = "https://swapi.dev/api/people/1"
var head = document.getElementById("heading")
var head2 = document.getElementById("mern")

// When its successful
// req.onload = function() {
//     console.log("It loaded")
//     const jsonParser = JSON.parse(this.responseText)
//     console.log(jsonParser)
//     console.log("vehicles:", jsonParser.vehicles[1])
//     head.innerHTML = jsonParser.name

// }

// When the is an error
// req.onerror = function() {
//     console.log("Error")
//     console.log(this)

// }

// req.open("GET", url)
// req.send()







// const xhr = new XMLHttpRequest()
// var url1 = "https://icanhazdadjoke.com"

// xhr.onload = function(){
//     console.log("it worked")
//     var res = JSON.parse(this.responseText)
//     head.innerText = res.joke
// }

// xhr.onerror = function(){
//     console.log("error")
// }

// xhr.open("GET", url1)
// xhr.setRequestHeader("Accept", "application/json")
// xhr.send()

// fetching api using the fetch keyword
// this method supports promises
// fetch(url).then(res => {
//     console.log("resolved:", res)
//     res.json().then(data => {
//         var info = data.name
//         head.innerText = info
//         // console.log("data:", data)
//     })
// }).catch(e => {
//     console.log("Error:", e)
// })

// alternative using the async
// async function loadStarWars(){
//     try{
//         const url1 = "https://swapi.dev/api/people/1"
//         const url2 = "https://swapi.dev/api/people/2"
//         const res = await fetch(url1)
//         const data = await res.json()
//         head.innerText = data.name
    
//         const res1 = await fetch(url2)
//         const data1 = await res1.json()
//         head2.innerText = data1.name
        
//         // console.log(data)
//         // console.log(data1)
//     }
//     catch (e) {
//         console.log(e)
//     }

// }

// loadStarWars()

// Another alternative of fetching data from an api is using the axios library 
const url = "https://swapi.dev/api/people/1"
const url2 = "https://swapi.dev/api/people/2"
// axios.get(url).then(res => {
//     console.log("response:",res.data)
// }).catch(e => {
//     console.log("error:", e)
// })

// using axios with await and async function
// const getStarName = async () => {
//     try{
//         const req = await axios.get(url)
//         head.innerHTML = req.data.name
    
//         const req2 = await axios.get(url2)
//         head2.innerHTML = req2.data.name
//         // console.log(req.data)
//     }
//     catch (e){
//         console.log("error", e)
//     }

// }

// getStarName()

async function kanyeQuotes(){
    const kanyeUrl = 'https://api.kanye.rest/'
    const res = await fetch(kanyeUrl)
    const data = await res.json()
    head.innerHTML = data.quote

    console.log(data)
}

kanyeQuotes()

const ul = document.getElementById("jokes")
async function dadJoke(){
    try{
        const dadUrl = "https://icanhazdadjoke.com"
        const heading = {headers : {
            Accept : "application/json"
        }}
        const res = await axios.get(dadUrl, heading)
        const dataJoke = await res.data.joke
        head2.innerHTML = dataJoke
        const newLi = document.createElement("li")
        newLi.append(dataJoke)
        ul.append(newLi)
    }
    catch (e){
        console.log("No jokes available", e)
        alert("No jokes available", e)
    }



    // console.log(dataInfo)
}

dadJoke()