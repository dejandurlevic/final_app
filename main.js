// https://raw.githubusercontent.com/dejandurlevic/data.json/main/data.json

(async function(){

let quiz = new Quiz(await API.getAllData());

let container = document.querySelector('.container');
let headerH3 = container.querySelector('h3');
let options = container.querySelectorAll('.option');
let footer = container.querySelector('footer h5');
let main = document.querySelector('main');



function displayQuestion(){
    let currentQuestion = quiz.getQuestion();

    headerH3.innerHTML = currentQuestion.text;
    footer.innerHTML = `Pitanje ${quiz.questionIndex +1} / ${quiz.questions.length}`
    options.forEach( (options,index) => {
        options.innerHTML = currentQuestion.options[index];
        options.onclick = userAnswer;
    })
}

function userAnswer(){
    let answer = this.innerHTML;
    quiz.answeredQuestion(answer);
    if(!quiz.isEnd()){
        displayQuestion();
    }else{
        main.innerHTML = `Vas rezultat je ${quiz.score}`;
    }
   
}

displayQuestion();

})()