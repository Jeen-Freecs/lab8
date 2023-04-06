$(document).ready(function() {
	let questions = [
		"How many bones in the human body?",
		"What is the most dense planet of our solar system?",
		"How many moons does Jupiter have?",
		"When the World War 2 ended?",
		"How many countries are there in the European Union?"
	];
	let answers = ["206", "Earth", "between 80 and 95", "1945", "27"];
	let options = [
		["206", "205", "317", "210"],
		["Earth", "Sun", "Jupiter", "Mars"],
		["between 80 and 95", "between 45 and 55", "between 60 and 90", "between 90 and 100"],
		["1946", "1950", "1939", "1945"], 
		["24", "27", "29", "25"]
	];

	let quiz_box = $("#quiz-box");

	$.each(questions, function(i, question) {
		let cur_question = $("<div>").addClass(`question-${i}`);
		quiz_box.append(cur_question);
		cur_question.append('<p>' + question + '</p>');
		$.each(options[i], function(j, choice) {
			cur_question.append('<label><input type="radio" name="question' + i + '" value="' + choice + '">' + choice + '</label>')
		})
	});

	$(".button-3").on('click', function() {
		let score = 0;
		$("h3").remove()
		$.each(questions, function(i, question) {
			let selected = $("input[name='question" + i + "']:checked").val();
			if (selected === answers[i]) {
				score++;
			}
		})
		$("#quiz-box").append("<h3>Overall Score is: " + score + " out of " + questions.length + "</h3>");
	});
});
