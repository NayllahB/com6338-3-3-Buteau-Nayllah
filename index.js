// Your code here

var questionsArr = [
    {
        question: 'Paris is located in France',
        answer: true
    },
    {
        question: 'Rome is located in Italy',
        answer: true
    },
    {
        question: 'Tokyo is located in Japan',
        answer: true
    },
    {
        question: 'Seoul is located in South Korea',
        answer: true
    },
    {
        question: 'Toronto is located in Canada',
        answer: true
    }
]

correctAnswer = 0;

function runQuiz(){
    for(var i = 0; i<questionsArr.length; i++){
        var userAnswer = confirm(questionsArr[i].question)
        if (userAnswer === questionsArr[i].answer) {
            correctAnswer++
        } 
        console.log(correctAnswer)
    }
    if (correctAnswer >= 0) {
        var percentage =(correctAnswer/questionsArr.length) * 100;
        alert('Final Score ' + percentage + '%')
        console.log(percentage)
        
    }
    
}

