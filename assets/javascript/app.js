$(document).ready(function(){

  var questions = [
    {question1: "What did I eat for breakfast?",
    answer1:[{
      a: "Nothing",
      b: "Tacos",
      c: "Bacon and Eggs",
      d: "Just Coffee"
    }],
    correct1: "d"
    },
    {question2: "How is my grasp of JS?",
      answer2:[{
        a: "So good",
        b: "Like, the best",
        c: "It's getting there, but im still lost most of the time",
        d: "What is JS?"
      }],
      correct2: "c"
    },
    {question3: "What is my dog's name?",
      answer3:[{
        a: "Spot",
        b: "Rauley",
        c: "Fuego",
        d: "PoopMachine9000"
      }],
      correct3: "b"
    }
  ]
  var answerCorrect=0;
  var answerWrong=0;
  var time;
  var questionTracker=0;

  function startGame(){
    showQuestions
  }

  function showQuestions(){
    questions.forEach(function(list){
      var title= $('<h3>');
      title.text(list.question);
      
      $('.question-list').append(title)
      list.answers.forEach(function(answer){
        var radioBtn= $("<input type='radio'>")
      })
    })
    $("#question-list").append(questions)
  }

  function updateScore(){

  }

  function resetGame(){

  }

  function countDown(){

  }

  function startTimer(){

  }
showQuestions()
   































})