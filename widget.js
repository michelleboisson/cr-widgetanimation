$(".options li").click(function(){
	if ($(this).attr("ans") == "correct"){
		$(this).addClass("correct");
		//set user response in fullresponse
		$(".userresponse").text("Correct");
	}
	else {
		$(this).addClass("incorrect");
		//set user response in fullresponse
		$(".userresponse").text("Incorrect");
	}
	$(this).addClass("selected");
	//trigger animation
	startTransition($(this));

})

var startTransition = function(selectedAnswer){
	console.log("startTransition");
	//wait .5 seconds

	//set position of selectedAnswer to it's current position before animating
	var selectedAnswerTop = selectedAnswer.position().top ;
	console.log(selectedAnswerTop);
	selectedAnswer.after("<li></li>"); //add a blank list item so the other items don't move
	selectedAnswer.css({
		"top": selectedAnswerTop - 20,
		});

	//hide all but the selectedAnswer
	$(".options li:not('.selected')").delay(250).fadeTo('fast',0, function(){
			//slide selectedAnswer up to top
			selectedAnswer.animate({
				"top":"20px"
			}, 50, 'linear', function(){
				//show full answer
				$(".fullanswer").delay(500).animate({"top":"300px", "opacity": "1"},'fast', 'linear');
				//activate Next button
				$(".next-btn").delay(1000).removeClass("crux-btn-inactive").addClass("crux-btn-special--lg");
			})
		});
} //end startTransition

//reload page with 'next btn'
$(".next-btn").click(function(){
	location.reload();
})
