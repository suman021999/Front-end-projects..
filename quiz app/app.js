
const questions=[
    {
        question:"Which is the oldest city in the world?",
        answers:[
            {text:"Aleppo" ,correct:false},
            {text:"Argos" ,correct:false},
            {text:"Byblos" ,correct:false},
            {text:"Damascus" ,correct:true}
        ]
    },
    {
        question:"Which is the oldest book in the world?",
        answers:[
            {text:"The Epic of Gilgamesh" ,correct:true},
            {text:"Nag Hammadi Library" ,correct:false},
            {text:"Pyrgi Gold Tablets" ,correct:false},
            {text:"Etruscan Gold Book" ,correct:false}
        ]
    },
        
    {
        question:"Who was the greatest scientist of ancient India?",
        answers:[
            {text:"Varahamihira" ,correct:false},
            {text:"Aryabhatta" ,correct:false},
            {text:"Kashyapa" ,correct:true},
            {text:"Bhaskarācharya" ,correct:false}
        ]
    },
    {
        question:"when kalinga war started?",
        answers:[
            {text:"241 BC" ,correct:false},
            {text:"261 BC" ,correct:true },
            {text:"271 BC" ,correct:false},
            {text:"221 BC" ,correct:false}
        ]
    }

]


let currentQuestionIndex=0
let score=0

const qe=document.querySelector("#que")
const answerButton=document.querySelector("#answer-btn")
const nextButton=document.querySelector("#next-btn")

function StartQuiz(){
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML="Next"
    ShowQuestion()
}
function ShowQuestion(){
    resetState()
    let CurrentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex + 1
    qe.innerHTML=questionNo+". "+CurrentQuestion.question

    CurrentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
     
}

function selectAnswer(e){
    const selectBtn=e.target
    const isCorrect=selectBtn.dataset.correct==="true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }
    else{
        selectBtn.classList.remove("incorrect")
    }

    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    qe.innerHTML=`You scored${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block "
}


function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
       ShowQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else{
        StartQuiz()
    }
})
StartQuiz()










