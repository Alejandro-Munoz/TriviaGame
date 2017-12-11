

//on Load Hide main content
$(document).ready(function(){

  var rightWrongAnswer="";
  var message="";

  $("#main-content").hide();

  $(document).on("click","#start-game",startGame);

  function setNewInterval(len){
    var y = setInterval(function(){
        // console.log("entra");
        $("#time-remaining").text("Time Remaining: "+i);
        i--;
        if(i<0){
          clearInterval(x);
        }
    },len);
  }

  function startGame(){
    var i = 10;
    
    //////////////////
    var rightWrongAnswer="";
    var message="";
    var list = $("#answers-list");

    $("#message").text(rightWrongAnswer);
    $("#answer").text(message);
    $("#answer-img").attr("src","");
    list.empty();
    ///////////////////
    var questions = [
      {question:"What was the first full length CGI movie",answers:["A Bug's Life","Monster Inc.","Toy Story"],correct:0,image:"https://media1.tenor.com/images/eaf58f4129a2d47a1436d67bf0a6772c/tenor.gif?itemid=5543650"},
      {question:"question2",answers:["answer1","answer2","answer3"],correct:1,image:""},
      {question:"question3",answers:["answer1","answer2","answer3"],correct:2,image:""},
      
    ];
    //get answers list
    // var list = $("#answers-list");

    // hide start button
    $("#start-game").hide();
    // show main-content
    $("#main-content").show();
    //get question
    $("#question").text(questions[0].question);

    // var answer = questions[0].
    for (var j=0; j < questions[0].answers.length;j++){
      // console.log(questions[0].answers[j]);
      var wrapper = $("<div>");
      var item = $("<span>");
      item.text(questions[0].answers[j]);
      item.addClass("question-button");
      item.attr("data-answer",questions[0].correct);
      wrapper.append(item);
      list.append(wrapper);
    }

    

    $(document).on('click',".question-button", function(e){
        console.log(this);
        var result = $(this).text();
        var correctAnswer = questions[0].answers[$(this).attr("data-answer")];
        console.log(correctAnswer)
        var answerImg = questions[0].image;
        // console.log(answerImg);
        //if correct answer
        if(result===correctAnswer){
          //
          

        }
        //if wrong answer
        else{
          clearInterval(x);


          console.log("entra");
          //set rightWrong var to Nope
          rightWrongAnswer = "Nope!";
          //set message to let the user know the right answer
          message = "The correct answer was: " + correctAnswer;
          //set image of right answer
          $("#answer-img").attr("src",answerImg);
          //Display info
          $("#message").text(rightWrongAnswer);
          $("#answer").text(message);

          var y = setTimeout(function(){
            // console.log("entra");
            startGame();
          },300);

        }
        // e.stopPropagation();    
      }
    );//on click

   

    var x = setInterval(function(){
      // console.log("entra");
      $("#time-remaining").text("Time Remaining: "+i);
      i--;
      if(i<0){
        clearInterval(x);
      }
    },1000);

  }//startGame

  


});//document.ready





// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(timeUp, 1000 * 15);

// //  Step 3:
// //  Fill in the blanks to these functions.
// function fiveSeconds() {

//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }

// function tenSeconds() {

//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }

// function timeUp() {

//   // in the element with an id of time-left add an h2 saying Time's Up!
//   // console log done
//   console.log("done");
//   $("#time-left").append("<h2>Time's Up!</h2>");
//   console.log("time is up");

//   //  The following line will play the audio file we linked to above:
//   audio.play();
// }