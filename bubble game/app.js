let timer=60
let hrn=0;
let score=0;

runtimer=()=>{
    let timeinterval= setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer
        }

        else{
            clearInterval(timeinterval)
        }

    },1000)
}
runtimer()





mbubble=()=>{
    let cl=""

for(let i=1;i<=184;i++){
    rn=Math.floor(Math.random()*10)
    cl +=`<div class="bubble">${rn}</div>`
}

document.querySelector("#pbotm").innerHTML=cl
}
mbubble()


getrunhit=()=>{
    hrn=Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=hrn
}
getrunhit()


scorerun=()=>{
    score+=10
    document.querySelector("#score").textContent=score
}


document.querySelector("#pbotm").addEventListener('click',(e)=>{
    let checknumber=Number(e.target.textContent)

    if(checknumber===hrn){
        scorerun()
        mbubble()
        getrunhit()

    }

})





