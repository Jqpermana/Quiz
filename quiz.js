const data = [
    {
        id: 1,
        question: "Apa kepanjangan dari HTML?",
        answers: [
            { answer: "Hyper Text Markup Language", isCorrect: true },
            { answer: "Hippie Text Markup Language", isCorrect: false },
            { answer: "Hyper Text Markin Language", isCorrect: false },
            { answer: "Hipno Text Markup Language", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Apa kepanjangan dari CSS?",
        answers: [
            { answer: "Cascading Style Shit", isCorrect: false },
            { answer: "Cascoding Style Sheet", isCorrect: false },
            { answer: "Cascading Style Sheet", isCorrect: true },
            { answer: "Cascading Smile Sheet", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "Apa fungsi CSS?",
        answers: [
            { answer: "Memperburuk Tampilan", isCorrect: false },
            { answer: "Memperindah Tampilan", isCorrect: true },
            { answer: "Tanpa Tampilan", isCorrect: false },
        ],
    },
];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = ()=>{
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener("click",()=>{
    resultScreen.style.display= "none"
    gameScreen.style.display= "block"
    playAgain()
});

const showResult = ()=>{
    resultScreen.style.display= "block"
    gameScreen.style.display= "none"

    resultScreen.querySelector(".correct").textContent =
    `Correct Answers: ${correctCount}`
    resultScreen.querySelector(".wrong").textContent =
    `Wrong Answers: ${wrongCount}`
    resultScreen.querySelector(".score").textContent =
    `Score: ${(correctCount - wrongCount) *10}`
};

const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item,index)=>
        `
        <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for="1">${item.answer}</label>
        </div>
        `
    ).join("");

    selectAnswer()
};

const selectAnswer = ()=>{
    answersContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = ()=>{
    submit.addEventListener("click",()=>{
        if(selectedAnswer !== null){
        selectedAnswer === "true" ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex)
        }else alert("Select an answer!");
    });
};

showQuestion(qIndex)
submitAnswer()