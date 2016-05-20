//append search bar to the page
$(".page-header").append('<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>');
//add pagination to the page
$(".page").append('<div class="pagination"><ul class="page-numbers"></ul></div>');

//define global variables
var $StudentsToHide;
var $StudentsToShow;
var inputValue = $('.student-search input').val().toLowerCase();


$(document).ready(function() {
	//set number of students to show on each page 
	$StudentsToShow = $('.student-item h3').filter(function() {
		if ($(this).text().indexOf(inputValue) >= 0) {
			return true;
		}
	});

	//show the first 10 students
	$StudentsToShow.each(function(index) {
		var $StudentParent = $(this).parents('.student-item');
		if (index < 10) {
			$StudentParent.show();
		} else {
			$StudentParent.hide();
		}
	});

	//append li items to the bottom
		for (var i = 0; i < Math.ceil($StudentsToShow.length / 10); i++) {
			
			var $anchortag;
			var $li = $('<li></li>');
			$(".page-numbers").append($li);

			if (i === 0) {
				$anchortag = $('<a class="active" href="#">' + (i+1) + '</a>');
			} else {
				$anchortag = $('<a href="#">' + (i+1) + '</a>');
			}
			$li.append($anchortag);
		}

	$("button").click(function() {
		//empty the list at the bottom to create a new one
		$(".pagination ul").empty();
		//store the value of the input search into a variable
		inputValue = $("input").val().toLowerCase();
		console.log(inputValue);
		//filter the list items by the input value and add CSS
		$StudentsToHide = $('.student-item h3').filter(function(index) {
			if($(this).text().indexOf(inputValue) == -1) {
			 return true;
		 }
		 //Hide anything that does not match the list items shown
		 }).each(function() {
		 	$(this).parent().parent().hide();

		 });
		 //show the correct students
		 $StudentsToShow = $('.student-item h3').filter(function(index) {
		 	if($(this).text().indexOf(inputValue) >= 0) {
		 		return true;
		 	}
		 }).each(function(){
		 	$(this).parent().parent().show();

		 });

		 $StudentsToShow.each(function(index) {
		var $StudentParent = $(this).parents('.student-item');
		if (index < 10) {
			$StudentParent.show();
		} else {
			$StudentParent.hide();
		}
	});
		 //appends li items to the bottom
		 for (var i = 0; i < Math.ceil($StudentsToShow.length / 10); i++) {
			
			var $anchortag;
			var $li = $('<li></li>');
			$(".page-numbers").append($li);

			if (i === 0) {
				$anchortag = $('<a class="active" href="#">' + (i+1) + '</a>');
			} else {
				$anchortag = $('<a href="#">' + (i+1) + '</a>');
			}
			$li.append($anchortag);
		}
		//calls NewPage function within the button click function
		$('.page-numbers a').click(NewPage);
		 
	});

//Create an event handler for clicking a page number 
$(".page-numbers a").click(NewPage);

//Function for changing pages and changing the active class on the links
function NewPage() {

//remove active class from page links
$('.page-numbers a').removeClass('active');

//make the pressed page number have the active class
$(this).addClass('active');

//store the page number into a variable so we can use it for indexing
var pageNumber = parseInt($(this).text());

//Show only ten student's according to the page number and hide the others
	$StudentsToShow.each(function(index) {
		var $StudentParent = $(this).parents('.student-item');
		if (index >= (pageNumber-1) * 10 && index < pageNumber * 10) {
			$StudentParent.show();
		} else {
			$StudentParent.hide();
			}
	});

}
});
			

		
		

	











