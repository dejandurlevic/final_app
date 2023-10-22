class Question {
    text;
    options;
    correctAnswer;
    points;
    category;

    constructor(text, options, correctAnswer, points, category){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.points = points;
        this.category = category;
    }
}

let questions = [];

