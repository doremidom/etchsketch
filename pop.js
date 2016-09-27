$(document).ready(function() {
    var xcount = 0;
    var ycount = 0;
    
    function divAppend() {
        $('container').append('<div></div>');
        
    }
      function randomNumber(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
  
  function randomColor() {
    	var options = [ 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    	var color = ['#']
    	var count = 0
    	while (count < 6) {
    		color.push(options[randomNumber(0, 15)]);
    		count++;
    	}
    	var string = color.join('')
    	return string
    }

    function gridMaker(size) {
    	var ycount = 0
    	var xcount = 0
    	while (ycount < size) {
    	while (xcount < size) {
    		divAppend();
    		xcount++;
    	}
    $('container').append('<br>');
    xcount = 0;
    ycount++;
}
    }
    $('button').click(function() {
		$('container').empty();
		var size = window.prompt("Enter a grid size", "ex. 30");
		gridMaker(size);
		$('div').hover(function(){
		$(this).css("background-color", randomColor());
	});
	})		

    while (ycount < 16) {
    	while (xcount < 16) {
    		divAppend();
    		xcount++;
    	}
    $('container').append('<br>');
    xcount = 0;
    ycount++;
}
	$('div').hover(function(){
		$(this).css("background-color", randomColor());
	});

});


