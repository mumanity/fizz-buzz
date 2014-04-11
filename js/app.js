$(document).ready(function() {
	
	$('#submit').on('click', function() {
		$('.results').empty();
		fizzBuzz();
		$('#userInput').val('');
	});

	$('#userInput').on('keydown', function(e) {
		if (e.keyCode ==13) {
			$('.results').empty();
			fizzBuzz();
			$('#userInput').val('');
			$(this).focus();
		}
	});


});


function fizzBuzz() {
	var answer = +$('input[id=userInput]').val();
	for (var x = 1; x <= answer; x++) {
		if (x % 3 === 0 && x % 5 === 0)  {
			$('.results').append('<p>FizzBuzz</p>');
		}
		else if (x % 3 === 0) {
			$('.results').append('<p>Fizz</p>');
		}
		else if (x % 5 === 0) {
			$('.results').append('<p>Buzz</p>');
		}
		else{
			$('.results').append('<p>'+x+'</p>');
		}
	}
}
