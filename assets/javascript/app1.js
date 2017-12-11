
$(document).ready(function(){
	//initialize vars

	var questions = [
      {question:"What was the first full length CGI movie?",answers:["A_Bug_Life","Monster Inc.","Toy Story"],correct:0,image:"assets/images/tenor.gif"},
      {question:"Which of these is not Spice?",answers:["Sporty Spice","Fred_Spice","Scary Spice"],correct:1,image:"assets/images/url-7.gif"},
      {question:"Which NBA team won the most titles in the 90s?",answers:["LA Lakers","Indiana Pacers","Chicago_Bulls"],correct:2,image:"assets/images/giphy.gif"}
	];

	var rightWrongMessage;
	var rightAnswerMessage;
	var numCorrectAnswers;
	var numIncorrectAnswers;
	var numUnanswered;
	var counter=0;
	var i;
	var list = $("#answers-list");
	
	//ask question
	function askQuestion(index){
		i = 10;
		list.empty();
		//clear fields last question
		$("#answer-img").attr("src","");
		$("#message").text("");
	    $("#answer").text("");
	    $("#question").text("");
	    //get correct answer
	    var correctAnswer = questions[index].answers[questions[index].correct];
	    var answerImg = questions[index].image;

	    console.log("nuevaans["+correctAnswer+"]");
		//display question
		var question = questions[index].question;
		$("#question").text(question);
		
		//display answers
		for (var j=0; j < questions[index].answers.length;j++){
	      // console.log(questions[0].answers[j]);
	      var wrapper = $("<div />");
	      var item = $("<span />");
	      item.text(questions[index].answers[j]);
	      item.addClass("question-button");
	      item.attr("data-answer",questions[index].correct);
	      wrapper.append(item);
	      list.append(wrapper);
	    }
		
	    function outOfTime(){
	    	clearInterval(x);
			numUnanswered++;
			counter++;
			// index++;
			rightWrongAnswer = "Out of Time!";
		    //set message to let the user know the right answer
		    rightAnswerMessage = "The correct answer was: " + correctAnswer;
		    //set image of right answer
		    $("#answer-img").attr("src",answerImg);
		    //Display info
		    $("#message").text(rightWrongAnswer);
		    $("#answer").text(rightAnswerMessage);
			startGame();
	    }

		//set timer
		var x = setInterval(function(){
			      // console.log("entra timer"+i);
			      $("#time-remaining").text("Time Remaining: "+i);
			      i--;
			      if(i<0){
			      	outOfTime();
			      }
			    },1000);
		

		//set handler
		$(document).on("click",".question-button", function(e){
	        e.stopPropagation();
	        // console.log(this);
	        var result = $(this).text();
	        console.log(result);
	        console.log("inside:",index);
	        correctAnswer = questions[index].answers[$(this).attr("data-answer")];
	        // console.log(correctAnswer)
	        //var answerImg = questions[index].image;
	        // console.log(answerImg);
	        //if correct answer
	        console.log("r:"+result+"cor:"+correctAnswer);
	        if(result === correctAnswer){
	        	clearInterval(x);
	          	console.log("entraT");
	          	numCorrectAnswers++;
	          	//set rightWrong var to Nope
	          	rightWrongAnswer = "Correct!";
	          	//set message to let the user know the right answer
	          	rightAnswerMessage = "";
	          	//set image of right answer
	          	$("#answer-img").attr("src",answerImg);
	          	//Display info
	          	$("#message").text(rightWrongAnswer);
	          	$("#answer").text(rightAnswerMessage);
	          	list.empty();
	          	counter++;
	          	index++;	
	          	var y = setTimeout(function(){
	            	// console.log("entra");
	            	startGame();
	          	},3000)
	        }
	        else{
	        	clearInterval(x);
	        	numIncorrectAnswers++;
	          	console.log("entraF");
	          	//set rightWrong var to Nope
	          	rightWrongAnswer = "Nope!";
	          	//set message to let the user know the right answer
	          	rightAnswerMessage = "The correct answer was: " + correctAnswer;
	          	//set image of right answer
	          	$("#answer-img").attr("src",answerImg);
	          	//Display info
	          	$("#message").text(rightWrongAnswer);
	          	$("#answer").text(rightAnswerMessage);
	          	list.empty();
	          	counter++;
	          	index++;
	          	var z = window.setTimeout(function(){
	            	// console.log("entra");
	            	startGame();
	          	},3000);

	        }
	        // e.stopPropagation();    
	      }
	    );//on click
		//end handler
	}

	//start game
	function startGame(){

		
		console.log(counter);
		//ask questions
		if(counter < 3){
		askQuestion(counter);

		}
		else{
			//show summary
			showSummary();
		}
		

	}

	//initialize game
	function initialize(e){
		e.stopPropagation();
		rightWrongMessage = "";
		rightAnswerMessage = "";
		numCorrectAnswers = 0;
		numIncorrectAnswers = 0;
		numUnanswered = 0;		
		 // hide start button
	    $("#start-game").hide();
	    // show main-content
	    $("#main-content").show();
		startGame();
	}

	//showSummary
	function showSummary(){
		//empty main
		var main = $("#main").empty();

		var sum = $("#summary");
		//subtitle
		var sub = $("<h3 />").text("All done, heres how you did!");
		var numCorrect = $("<div />").text("Correct Answers: " + numCorrectAnswers);
		var numIncorrect = $("<div />").text("Incorrect Answers: " + numIncorrectAnswers);
		var unanswered = $("<div />").text("Unanswered: " + numUnanswered);
		
		sum.append(sub,numCorrect,numIncorrect,unanswered);
		main.append(sum);
		sum.show();


	}
	$("#summary").hide();
  	$("#main-content").hide();


	$(document).on("click","#start-game",initialize);
	//reset
	// initialize();





});//document.ready

