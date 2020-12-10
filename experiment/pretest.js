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
      question: "The signal generator generally used in the laboratories is ________ oscillator",  ///// Write the question inside double quotes
      answers: {
        a: "Crystal",                  ///// Write the option 1 inside double quotes
        b: "Hartley",                  ///// Write the option 2 inside double quotes
        c: "Phase Shift",                  ///// Write the option 3 inside double quotes
        d: "Wien-bridge"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "Which among the following op-amp is chosen for generating triangular wave of relatively higher frequency?",  ///// Write the question inside double quotes
      answers: {
        a: "LM741 op-amp",                  ///// Write the option 1 inside double quotes
        b: "LM301 op-amp",                  ///// Write the option 2 inside double quotes
        c: "LM1458 op-amp",                  ///// Write the option 3 inside double quotes
        d: "LM3530 op-amp"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "Output of an integrator producing waveforms of unequal rise and fall time are called",  ///// Write the question inside double quotes
      answers: {
        a: "Triangular waveform",                  ///// Write the option 1 inside double quotes
        b: "Sawtooth waveform",                  ///// Write the option 2 inside double quotes
        c: "Pulsating waveform",                  ///// Write the option 3 inside double quotes
        d: "Spiked waveform"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
     question: "Why zener diode is used at the output terminal of square wave generator?",  ///// Write the question inside double quotes
      answers: {
        a: "To reduce both output and capacitor voltage swing",                  ///// Write the option 1 inside double quotes
        b: "To reduce output voltage swing",                  ///// Write the option 2 inside double quotes
        c: "To reduce input voltage swing",                  ///// Write the option 3 inside double quotes
        d: "To reduce input voltage swing"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
     question: "Modulation level can be adjusted in R.F. signal generator upto",  ///// Write the question inside double quotes
      answers: {
        a: "100%",                  ///// Write the option 1 inside double quotes
        b: "90%",                  ///// Write the option 2 inside double quotes
        c: "95",                  ///// Write the option 3 inside double quotes
        d: "80"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
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