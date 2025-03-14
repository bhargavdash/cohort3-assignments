import {quizData} from "./data.js"

console.log("Script tag works")
function displayQuestions(){
    quizData.forEach(quiz => {
        console.log(quiz.question);
    })
}

function loadQuestion(number){
    console.log("Submit clicked")
    let quiz = quizData[number];
    let question = quiz.question;
    let options = []
    console.log(question)
    options.push(quiz.a)
    options.push(quiz.b)
    options.push(quiz.c)
    options.push(quiz.d)
    console.log(options)

    // change question in DOM
    let questionELement = document.createElement("h3");
    questionELement.innerHTML = question;
    let questionDiv = document.getElementById("question-id");
    questionDiv.innerHTML = ""
    questionDiv.appendChild(questionELement);

    // change options in DOM
    let parentDiv = document.getElementById("parentDiv");
    parentDiv.innerHTML = "";
    options.forEach((option, index) => {
        // create div element
        let divElement = document.createElement("div");
        divElement.id = `option${index+1}`;
        // create input element
        let inputElement = document.createElement("input");
        inputElement.type = "radio";
        inputElement.name = "quizOption"
        inputElement.id = `${index+1}`;
        // create label element
        let labelElement = document.createElement("label");
        labelElement.htmlFor = `${index+1}`;
        labelElement.innerHTML = option;
        
        // append label and input into divElement
        divElement.appendChild(inputElement);
        divElement.appendChild(labelElement);

        // append divElement into parentDiv
        parentDiv.appendChild(divElement);
    })
}
let counter = 0;

function checkQuestion(id, counter){
    let actualAns = quizData[counter].correct;
    let ansMap = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4
    }
    console.log(ansMap[actualAns]);
    let givenAns = id;
    return ansMap[actualAns] == givenAns;
}
let correctAns = 0;

function displayResult(){
    let score = `${correctAns}/4`;
    // create result element
    let resultElement = document.createElement("div");
    resultElement.className = `question`;
    // create display element to display the message
    let displayElement = document.createElement("h3");
    displayElement.innerHTML = `You answered ${score} questions correctly`
    // append display element into result element
    resultElement.appendChild(displayElement);
    
    // create reload element
    let reloadElement = document.createElement("div");
    reloadElement.className = `submit`;
    // create button element
    let buttonElement = document.createElement("button");
    buttonElement.id = `submit-btn`;
    buttonElement.innerHTML = "Reload";
    // append button element into reload element
    reloadElement.appendChild(buttonElement);


    let parentDiv = document.getElementById("container-id");
    parentDiv.innerHTML = ""

    parentDiv.appendChild(resultElement);
    parentDiv.appendChild(reloadElement);

    buttonElement.addEventListener('click', () => {
        location.reload();
    })

}
document.getElementById("submit-btn").addEventListener("click", () => {
    let btn = document.getElementById("submit-btn")
    console.log(btn.innerHTML);
    if(btn.innerHTML == "Reload"){
        location.reload();
    }
    else{
        console.log("Counter value: ", counter);
        // retrieve the selected option
        let selectedOption = document.querySelector('input[name="quizOption"]:checked');
        console.log(selectedOption.id);
        // check if the option is correct or wrong
        if(selectedOption.id){
            if(checkQuestion(selectedOption.id, counter)){
                correctAns++;
            }
        }
        // load the next question
        if(counter >= 0 && counter < 3){
            loadQuestion(counter+1);
            counter++;
        }
        else if(counter == 3){
            displayResult();
        }
        }
});