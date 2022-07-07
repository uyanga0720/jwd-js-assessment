/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function(e){
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  const submit = document.querySelector('#btnSubmit');
  submit.addEventListener('click',function(e){
    var result = document.getElementById("score");
    result.innerHTML = "<h2> You scored : </h2>" + score;
  });
  // submit.addEventListener('click',calculateScore() );

  



  /**************ADD TIMER*************/



  const startingMinutes = 1;
  let time =startingMinutes *60; //total in seconds

  const countdownElement = document.getElementById('time');

  setInterval(updateCountdown, 1000);
  function updateCountdown(){
  const minutes = Math.floor(time/60);
  let seconds =time % 60; //remaining seconds

  seconds =seconds < 10 ? '0'+seconds : seconds; // give us 2:00 2 digits seconds

  countdownElement.innerHTML = `${minutes}:${seconds}`;
  time --;
   }
   


  /**************END TIMER*************/

  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which country has the longest coastline in the world?',
      o: ['Chile', 'Canada', 'Australia', 'China'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which country has more lakes than the rest of the world combined?',
      o: ['Mongolia', 'Canada', 'Russia', 'Bolivia'],
      a: 1,
    },
    {
      q: 'What is the largest country in Africa?',
      o: ['Egypt', 'Algeria', 'Moroco', 'Togo'],
      a: 1,
    },
    {
      q: 'What is the capital of Mongolia?',
      o: ['Beijing', 'Ulaanbaatar', 'Warsaw', 'Lapaz'],
      a: 1,
    },
    {
      q: 'What is the largest landlocked country? ',
      o: ['Vatican', 'Kazakhstan', 'Australia', 'Turkey'],
      a: 1,
    },
  ];
  


  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    let submit = `<div>
    <button type="button" class="btn btn-primary" id="btnSubmit">
      Submit Quiz
    </button>
    <button type="button" class="btn btn-primary" id="btnReset">
      Reset Quiz
    </button>
    <span id="score"></span>
  </div>`;
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay+ submit;
    });
    // task2
    quizWrap.addEventListener('submit', calculateScore);
  };

  // Calculate the score
 
  const calculateScore = () => {
  var score = 0;
  let result = document.querySelector('#score');

    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);
        

        if(radioElement.checked  === 0){
          e.preventDefault();
        }

        if (quizItem.a === i) {
          //change background color of li element here
          liElement.style.backgroundColor='green';
          radioElement.value= 'true';
        }

        if (radioElement.checked) {
          score++;
          // result.innerHTML = "Your Score "+ score;

          // code for task 1 goes here
      
        }
      }
    });
  };

  // call the displayQuiz function
  displayQuiz();
  //Reset Button
  let resetBtn = document.querySelector('#btnReset');
  resetBtn.addEventListener('click',function(){
    window.location.reload()
  })
});
