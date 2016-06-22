$(document).ready(function() {
// $( "ul li:nth-child(2n)" ).append( "<span> - 2nd!</span>" );

// $("#primoUL + p").css("border", "3px solid green");
// $("#primoUL ~ ul").css("border", "3px solid red");

var mioElem = $("#secondoUL");

// mioElem.prev().prev().css('font-size', '1.3em');
// mioElem.find('li.evidenzia').css('background-color', 'red');

var i = 0;
mioElem.find('li').each(function(index, el) {
	i++;
	$(el).css('border', i+'px solid red');	
});


	// $("#primoUL li.evidenzia").text("nuovo testo").css('color', 'red');
	 //$(".evidenzia ").css("background-color","yellow");
	// $("ul > .evidenzia").css("background-color","yellow");
	//$("ul li:first").css("background-color","red");
	//$("#primoUL li:last, #secondoUL li:last").css("background-color","red");



	// $("li:even").css({
	// 	color: 'yellow',
	// 	backgroundColor: 'blue'
	// });

	$("li:contains('esercizio1')").parent().parent().css('border', '1px solid black');


	$("#btnTester").click(
		function(event) {
		
		var test = $("#tester").val();
		// alert(test);
		$("li").css('color', 'black');
	// $("li:contains(" + test + ")").html("<a href='#'>approvato</a>");
	$("ul:nth-child(3)").css("color", "green");

	});


	var contatore = 0;

	function slideshow(){

		var img = 'banksy' + contatore + '.jpg';

		$("#content").html('<img src="images/' + img +'" />');

		if(contatore < 8)		contatore++; else contatore = 0;

	}

	//var intervallo = setInterval(slideshow, 1000);



	//var myContent = document.getElementById("content");
	//var myPortfolio = $("#portfolio");

	$("#btnLab").click(function(event) {

		//console.log(event);
		/*$("#content p:first")
			.css("border","2px solid red")
			.css("font-size","45px");

		$("#portfolio").css("border","2px solid green");
		$(".evidenzia").css("background-color", "yellow")
		
		$("#sidebar li:odd").css("background-color", "#ccc");
		*/



		$("section").hide(300);
		$("#content").show(3000);
		$("#content p").addClass('red');
		$("#content p:first").removeClass('red');
		$("#content p").toggleClass('red');
		clearInterval(intervallo);
		
	});



});

