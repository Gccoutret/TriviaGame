$(document).ready(function(){

  var questions = [
    {question: "What did I eat for breakfast?",
    answers:[
      {answerChoice: " Nothing ",
      isCorrect: false,
      name: "3"},
      {answerChoice: " Eggs ",
      isCorrect: false,
      name: "3"},
      {answerChoice: " Tacos ",
      isCorrect: false,
      name: "3"},
      {answerChoice: " Just Coffee ",
      isCorrect: true,
      name: "3"},],
    },
    
    {question: " How is my grasp of JS? ",
      answers:[
        {answerChoice: " What is JS? ",
        isCorrect: false,
        name: "2"},
        {answerChoice: " Im the best ",
        isCorrect: false,
        name: "2"},
        {answerChoice: " Its getting there but i'm pretty lost most of the time ",
        isCorrect: true,
        name: "2"},
        {answerChoice: " Ive got it pretty well ",
        isCorrect: false,
        name: "2"}],
    },

    {question: "What is my dog's name?",
      answers:[
        {answerChoice: " Rauley ",
      isCorrect: true,
      name: "1"},
      {answerChoice: " Bravo ",
      isCorrect: false,
      name: "1"},
      {answerChoice: " Fuego ",
      isCorrect: false,
      name: "1"},
      {answerChoice: " Spot ",
      isCorrect: false,
      name: "1"}],
    }
  ]
  var answerCorrect=0;
  var answerWrong=0;
  var time;
  var questionTracker=0;

  function startGame(){
    // showQuestions
  }

  function showQuestions(){
    questions.forEach(function(list){
      var title= $('<h3>');
      title.text(list.question);
      
      $('.question-list').append(title)
      list.answers.forEach(function(answer){
        var radioBtn= $("<input type='radio'>");
        var label= $("<label>")
        label.text(answer.answerChoice)
        radioBtn.attr("name",answer.name)
        console.log(label)
        $(".buttons").append(radioBtn)
        $(".buttons").append(label)
      })
    })
      $('.question-list').append("<button>")
  }

  function updateScore(){
    //I would need an if statement to count "corrects" when clikcking on a "true" 
    //answer but I dont think this would work because you could just click on a true statement over and over. 
    


  }

  function countDown(){

  }

  function startTimer(){

    setTimeout(timeUp, 1000 * 3600);
  
  }

  function timeUp() {
     
     
      $("#time-left").append("<h2>Time's Up!</h2>");
      alert("time is up");
  }
 showQuestions()
   































})