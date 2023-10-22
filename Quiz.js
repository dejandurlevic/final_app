class Quiz {
    questions;
    score = 0;
    questionIndex = 0;
    constructor(questions){
         this.questions = questions;
    }

    getQuestion(){
        return this.randomize(this.questions[this.questionIndex])
    }

    randomize(questions){
        let copyOptions = [].concat(questions.options);
        let arrForExport = [];      
        for(let i=0; i<4; i++){
            let rand = Math.floor(Math.random()*copyOptions.length)
            arrForExport.push(copyOptions[rand]);
            copyOptions.splice(rand,1);
        }

        questions.options = arrForExport;
        return questions;
    }

    isEnd(){
        return this.questions.length === this.questionIndex;
    }

    answeredQuestion(answer){
        if(answer === this.getQuestion().correctAnswer){
            this.score += this.getQuestion().points;
        }
        this.questionIndex++;
    }
}



