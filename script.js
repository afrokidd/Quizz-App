const questions=[
    {
        question:"what is karishma's pet peve?",
        answers: [
            {text: "Taking bite with tounge out",correct:false},
             {text: "chest hair",correct:true},
              {text: "sounding condsending",correct:false},
               {text: "ghost",correct:false},
        ]
    },
    {
        question:"how many cats does karishma have?",
        answers: [
            {text: "one",correct:false},
             {text: "two",correct:false},
              {text: "three",correct:false},
               {text: "four",correct:true},
        ]
    },
    {
         question:"what does karishma likes?",
        answers: [
            {text: "bicep",correct:false},
             {text: "back",correct:true},
              {text: "abs",correct:false},
               {text: "shoulder",correct:false},
        ]
    },
    {
         question:"which country karishma want to visit?",
        answers: [
            {text: "korea",correct:false},
             {text: "switzerland",correct:false},
              {text: "italy",correct:false},
               {text: "japan",correct:true},
        ]
    },
    {
         question:"what is karishma's fav drink?",
        answers: [
            {text: "cola",correct:true},
             {text: "pepsi",correct:false},
              {text: "sting",correct:false},
               {text: "mountain dew",correct:false},
        ]
    }
];

const questionelement=document.getElementById("que");
const answerButton=document.getElementById("ans_btn");
const nextButton=document.getElementById("nextbtn");

let score=0;
let currquestionIdx=0;

function startQuiz(){
currquestionIdx=0;
score=0;
nextButton.innerHTML="Next";
showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currquestionIdx];
    let questionNo = currquestionIdx + 1;
    questionelement.innerHTML= questionNo+ ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });


}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectbutton=e.target;
    const isCorrect= selectbutton.dataset.correct==="true";
    if(isCorrect){
        selectbutton.classList.add("correct");
        score++;
    }
    else{
        selectbutton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showscore(){
    resetState();
    questionelement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currquestionIdx++;
    if(currquestionIdx<questions.length){
     showQuestion();
    }
    else{
        showscore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currquestionIdx<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();

