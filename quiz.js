
    // creates a quiz

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const quizQuestions = [
    {
        question: "Caroline's profile image features her amongst",
        answers: {
            a: "Flurries inside an alpine-themed snowdome",
            b: "Traffic within a Hanoi streetscape",
            c: "Light beams from an artwork by one of her favourite Australian artists, Ross Manning",
            d: "Seashells on a coral cay in the Great Barrier Reef" 
        },
        correctAnswer: "c"
    },
    
    {
        question: "Caroline is enrolled in ",
        answers: {
            a: "MPhil",
            b: "MBA",
            c: "MBBS",
            d: "PhD" 
        },
        correctAnswer: "a"
    },
    {
        question: "Caroline's work has been published in",
        answers: {
            a: "Meanjin",
            b: "Hinterland",
            c: "Overland",
            d: "All of the above" 
        },
        correctAnswer: "d"
    }
    
    ];



    function buildQuiz() {

        // variable to store the HTML output
const output = [];

for(i=0; i<quizQuestions.length; i++) {

    // variable to store the list of possible answers
    
    const answers = [];

    // for each available answer to this question add a html radio button
    for(letter in quizQuestions[i].answers)
    {
    answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
}
// add this question and its answers to the output
output.push(
  '<div class="question">' + quizQuestions[i].question + '</div>'
  + '<div class="answers">' + answers.join('') + '</div>'
  );
}
  // combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');

    }

    function showResults() {
        // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      var numCorrect = 0;
      // for each question find selected answer
for(i=0; i<quizQuestions.length; i++){
    
   userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
   // if answer is correct
   if(userAnswer===quizQuestions[i].correctAnswer){
     // add to the number of correct answers
     numCorrect++;
             
     // color the answers green
     answerContainers[i].style.color = 'lightgreen';
     }
     // if answer is wrong or blank
       else{
       // color the answers red
           answerContainers[i].style.color = 'red';
       }
   
   }
   if (numCorrect === 0) { 
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
        }
        if (numCorrect === 1) { 
          resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";
                }
                if (numCorrect === 2) { 
                    resultsContainer.innerHTML = "Nearly there... You managed 2 out of 3 right. You know Caroline pretty well!";
                        }
                        if (numCorrect === 3) { 
                            resultsContainer.innerHTML = "100% You know Caroline well!";
                                }
    
            }
    
            //load quiz
            buildQuiz();

            submitButton.onclick = function() {
                showResults();
              }
