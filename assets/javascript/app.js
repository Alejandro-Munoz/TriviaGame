

//on Load Hide main content
$(document).ready(function(){

  $("#main-content").hide();

  $(document).on("click","#start-game",startGame);

  function startGame(){
    var i = 10;

    var questions = [
      {question:"question1",answers:["answer1","answer2","answer3"]},
      {question:"question2",answers:["answer21","answer22","answer23"]},
      {question:"question3",answers:["answer31","answer32","answer33"]}
    ];

    // hide start button
    $("#start-game").hide();
    // show main-content
    $("#main-content").show();
    //get question
    $("#question").text(questions[0].question);
    //get answers list
    var list = $("#answers-list");

    for (var j=0; j < questions[0].answers.length;j++){
      console.log(questions[0].answers[j]);
      var item = $("<li>");
      item.text(questions[0].answers[j]);
      item.addClass("question-button");
      list.append(item);
    }
    $(document).on('click',".question-button",function(){
      alert(this.textContent);
    });

   

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