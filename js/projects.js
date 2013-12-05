/* Scripts to handle the project information slides */

jQuery(document).ready(function ($) {

	// An array to hold all of the projects and their information
	var projects = [
		{
			"id" : 0,
			"title" : "Project Awesome",
			"subtitle" : "A subtitle for Project Awesome",
			"text1" : "This project was the best.",
			"text2" : "More than the best.",
			"text3" : "The bestest best ever to best the best.",
			"text4" : "This project was the best.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 1,
			"title" : "Project Really Awesome",
			"subtitle" : "A subtitle for Project Awesome",
			"text1" : "This project was the best.",
			"text2" : "More than the best.",
			"text3" : "The bestest best ever to best the best.",
			"text4" : "This project was the best.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 2,
			"title" : "Project SUPERLEUK",
			"subtitle" : "A subtitle for Project Awesome",
			"text1" : "This project was the best.",
			"text2" : "More than the best.",
			"text3" : "The bestest best ever to best the best.",
			"text4" : "This project was the best.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 3,
			"title" : "Project DA BEST",
			"subtitle" : "A subtitle for Project Awesome",
			"text1" : "This project was the best.",
			"text2" : "More than the best.",
			"text3" : "The bestest best ever to best the best.",
			"text4" : "This project was the best.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 4,
			"title" : "Project SHABAM",
			"subtitle" : "A subtitle for Project Awesome",
			"text1" : "This project was the best.",
			"text2" : "More than the best.",
			"text3" : "The bestest best ever to best the best.",
			"text4" : "This project was the best.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		}
	];

	// Shows project name div when project image is hovered over
	$('.project').hover(function() {
        $(this).children('img').animate({opacity: 0.2}, 800);	// Dim image
        $(this).children('.name').animate({opacity: 1}, 800);	// Show name
	}, function() {
		$(this).children('img').animate({opacity: 1}, 800);
		$(this).children('.name').animate({opacity: 0}, 800);
	});

	// Edits & shows/hides the team member information div when image is clicked
	$('.project').on('click', function () {
		// Get project id from the clicked item
	  	var projectid = $(this).attr('id');

	  	console.log("project clicked!");

	  	// Find the associated project in the projects array
		var currproject = $.grep(projects, function(e){ return e.id == projectid; });

		// If the returned array contains more than one project, there's a problem
		if (currproject.length == 1) {
			currproject = currproject[0];
		} else {
			currproject = currproject[0];
			console.log("Uh oh, multiple projects with the same id...");
		}

		// If project detail is hidden, change info and show
	  if ( $( '#projslidecontainer' ).is( ':hidden' ) ) {
	  	$('#projslidecontainer').show().attr('height', '900px');
	  	changeProjectInfo(projectid, currproject);
	  } else {
	  	// Else just change info
	  	changeProjectInfo(projectid, currproject);
	  }

	});

	// Changes the information in the project information div
	// Input is the relevant project object from the projects array
	function changeProjectInfo(id, project) {

		// Iterates through all slides of Orbit slideshow and updates information
		for (var i = 0; i < 5; i++) {
			// Generates the id of the current li (of slideshow) to edit
			//var currId = "project-" + i;

			// Variables to access values in projects array
			var currText = "text" + i;
			var currImg = "img" + i;

			// Update title
			var titleId = "#title-" + (i + 1);
			$(titleId).text(project.title);

			// Update text
			var textId = "#text-" + i;
			$(textId).text(project[currText]);

			// Update image
			var imgId = "#img-" + i;
			$(imgId).attr("src", project[currImg]);

		}
	}










});