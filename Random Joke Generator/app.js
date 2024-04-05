const jokeContainer=document.getElementById("joke")
const button=document.getElementById("btn")
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke=()=>{
    fetch(url)
    .then(data => data.json())
    .then(item=>{
        jokeContainer.textContent=`${item.joke}`
    })
    // .then(item=>console.log(item.joke))

}

   
button.addEventListener("click",getJoke)

getJoke()