const questionData = [
    {
        question: 'What is Javascript?',
        a: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers',
        b: 'its Java and Script',
        c: 'Script based java',
        d: 'Idk, i like it!',
        correct: 'a'
    },
    {
        question: 'Enumerate the differences between Java and JavaScript?',
        a: 'These two languages are inter-dependent',
        b: 'Java is an object - oriented programming hereas JavaScript is a client-side scripting language',
        c: 'Both are same',
        d: 'Yeah same',
        correct: 'b'
    },
    {
        question: 'let arr = [1 , 2, 3, 4]; a[100] = 5; console.log(a.length) produce?',
        a: '4',
        b: '5',
        c: '100',
        d: '101',
        correct: 'd'
    },
    {
        question: 'Which company developed JavaScript?',
        a: 'Netscape',
        b: 'Oracle',
        c: 'Apple',
        d: 'Not me!',
        correct: 'a'
    },
    {
        question: 'What is 2 + 2 ?',
        a: 'Not 4',
        b: 'Its not lower or greater than 4',
        c: 'Of course is 4',
        d: 'My be 4',
        correct: 'a'
    }
];
// console.log(questionData);

const questionText = document.querySelector('#question');
const answerText = document.querySelectorAll('.answer');
const scoreText = document.querySelector('#quiz');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const subBtn = document.querySelector('#submit');
const h2Score = document.querySelector('#score');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    reset();

    const currentQuizData = questionData[currentQuestion];
    questionText.textContent = currentQuizData.question;
    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerText.forEach(element => {
        if (element.checked) {
            // return element id selected
            answer = element.id
        }
    });
    return answer;
}

function reset() {
    answerText.forEach(element => {
       element.checked = false; 
    });
}

subBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === questionData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questionData.length) {
            loadQuiz();
        } else {
            scoreText.innerHTML = `
                <h2>You answered correctly at ${score}/${questionData.length} question</h2>
                <button onclick="location.reload()">Reload</button>
                `;
            setTimeout(() => location.reload() , 10000);
        }
        console.log(currentQuestion, questionData.length);
    }
});