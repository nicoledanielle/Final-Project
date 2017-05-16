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


function openOne(event){
	event.preventDefault();
	$("#clipOne").show();
}


function openTwo(event){
	event.preventDefault();
	$("#clipTwo").show();
}


function openThree (event){
	event.preventDefault();
	$("#clipThree").show();
}


function closeModal (event){
	event.preventDefault();
	$(this).parent().parent().hide();
}

});