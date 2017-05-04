$(document).ready(function(){
	$("nav ul li:first-child").click(function(){
		 $("nav").toggleClass("show");
	});


// Event Listeners

$("#linkOne").click(openOne);

$("#linkTwo").click(openTwo);

$("#linkThree").click(openThree);

$(".close").click(closeModal);


// Functions


function openOne(e){
	e.preventDefault();
	$("#clipOne").show();
}


function openTwo(e){
	e.preventDefault();
	$("#clipTwo").show();
}


function openThree (e){
	e.preventDefault();
	$("#clipThree").show();
}


function closeModal (e){
	e.preventDefault();
	$(this).parent().parent().hide();
}

});