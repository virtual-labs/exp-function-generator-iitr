/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "X-Y recorders is the type of",  ///// Write the question inside double quotes
      answers: {
        a: "Graphic recorders",                  ///// Write the option 1 inside double quotes
        b: "Oscillographic recorders",                  ///// Write the option 2 inside double quotes
        c: "Magnetic tape recorders",                  ///// Write the option 3 inside double quotes
        d: "Digital recorders"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "Depending on whether the display is a numeric or alphanumeric, the segmental displays is",  ///// Write the question inside double quotes
      answers: {
        a: "7 segmental",                  ///// Write the option 1 inside double quotes
        b: "14 segmental",                  ///// Write the option 2 inside double quotes
        c: "21 segmental",                  ///// Write the option 3 inside double quotes
        d: "answers (A) and (B)"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },  


    {
      question: "A square wave oscillator has fo =1khz. Assume the resistor value to be 10kΩ and find the capacitor value?",  ///// Write the question inside double quotes
      answers: {
        a: "3.9 µF",                  ///// Write the option 1 inside double quotes
        b: "0.3 µF",                  ///// Write the option 2 inside double quotes
        c: "2 µF",                  ///// Write the option 3 inside double quotes
        d: "0.05 µF"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },


    {
      question: "Triangular wave form has",  ///// Write the question inside double quotes
      answers: {
        a: "Rise time < fall time",                  ///// Write the option 1 inside double quotes
        b: "Rise time = fall time",                  ///// Write the option 2 inside double quotes
        c: "Rise time ≥ fall time",                  ///// Write the option 3 inside double quotes
        d: "None of the mentioned"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
      question: "The principal circuit of an AF signal generator is a",  ///// Write the question inside double quotes
      answers: {
        a: "Constant frequency audio oscillator",                  ///// Write the option 1 inside double quotes
        b: "Variable frequency audio oscillator",                  ///// Write the option 2 inside double quotes
        c: "Variable frequency radio oscillator",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////