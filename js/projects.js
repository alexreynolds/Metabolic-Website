/* Scripts to handle the project information slides */

jQuery(document).ready(function ($) {

	// An array to hold all of the projects and their information
	var projects = [
		{
			"id" : 0,
			"title" : "Cleantech Playground",
			"subtitle" : "Analyze - Design",
			"text1" : "The Cleantech Playground serves as a new blueprint for urban development, where decentralized technologies and full recycling of local resources empowers urban areas to be self-sufficient.",
			"text2" : "The Cleantech Playground was the title of a design and feasibility study of closed cycle, sustainable built environments. Metabolic specifically focused on two neighborhoods in Amsterdam. We published the report in February 2013 with Innovatie Netwerk, part of the Dutch Ministry of Economic Affairs. The full report can be viewed at:  http://innovatienetwerk.onlinetouch.nl/216",
			"text3" : "The concept details how nutrients, energy, and water can be recycled on-site to maximize efficiency of resources.",
			"text4" : "The approach of the Cleantech Playground involves community members and local stakeholders to build clean technologies and part of their own dwellings. This reduces costs, transfers knowledge, and creates group cohesion.",
			"text5" : "The Cleantech Playground is being applied at the de Ceuvel site in Amsterdam North, creating both a decentralized cleantech utility and a demonstration and testing site for new technologies that can transform how we produce and consume resources and public services in cities.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "<iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/PmO2UXvhcVg\" frameborder=\"0\" allowfullscreen></iframe>",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 1,
			"title" : "De Ceuvel",
			"subtitle" : "Experiment - Build",
			"text1" : "The de Ceuvel development is on a plot of polluted land that will be cleaned using plants (phytoremediation). The buildings on the site will consist of retrofitted houseboats, upgraded to a high level of energy performance.",
			"text2" : "De Ceuvel includes 15 houseboats placed on land and a teahouse that serve creative entrepreneurs, architects, ???",
			"text3" : "Throughout the site, solar technologies will convert energy from the sun into heat and electricity. Green roofs and water collection systems are designed to collect, purify, and store rainwater for when it’s needed. Sanitation systems will extract energy, nutrients, and water from the waste produced for on-site food production. A network of sensors provide information on performance and user behavior. The site will serve as a “Cleantech Playground” where new technologies can be tested, building a pathway for their broader adoption.",
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
			"title" : "Circle Economy",
			"subtitle" : "Analyze - Design",
			"text1" : "Metabolic is working with the Circle Economy to develop a methodology for systemic sustainability analysis.",
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
			"title" : "Sensors",
			"subtitle" : "Design - Experiment",
			"text1" : "Metabolic is using existing sensors combined with our own micro-controller design to measure technology performance, environmental quality, and user behavior.",
			"text2" : "We use sensors to automate urban farming systems, measure resource use in the built environment, and monitor air and water quality for cities.",
			"text3" : "Metabolic develops new uses for sensors and automation at our workshop, Metabolic Works, located in Amsterdam North.",
			"text4" : "We’re working to incorporate our sensing and automation systems in new applications that can make us more knowledgeable about our environments while we make our environments more responsive.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 4,
			"title" : "Overhoeks Toren",
			"subtitle" : "Experiment - Build",
			"text1" : "The Overhoeks tower is an iconic building in Amsterdam that used to be the headquarters of Royal Dutch Shelll. It was bought with plans to transform it into a series of clubs, apartments, and restaurants. During this transition, it was opened to unique start-ups and creative businesses who could make good use out of the space in the meantime.",
			"text2" : "Metabolic transformed the first floor of the Overhoeks Tower into an open-plan co-working space and testing ground in the Summer of 2013.",
			"text3" : "The original plan called for indoor mushroom farming and experimenting with integrating ICT with food systems. The roof terrace was meant to be used to experiment with urban agriculture systems and clean technology testing.",
			"text4" : "A video of Metabolic in June shows us retrofitting the Overhoeks tower and preparing greywater treatment systems over the same weekend.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 5,
			"title" : "Symbioculture",
			"subtitle" : "Design - Experiment - Build",
			"text1" : "Symbioculture presents a radical departure from business as usual in agricultural production: rather than focusing on the idealized production of a single crop (as a monoculture), it instead proposes the idea of many crops, fungi, livestock, and insects in a complex polyculture. It is designed to approximate some aspects of a natural ecosystem with self supporting plant and animal interactions, and the creation of ecological niches within the system reduce the need for mechanical and chemical interventions.",
			"text2" : "Metabolic transformed the first floor of the Overhoeks Tower into an open-plan co-working space and testing ground in the Summer of 2013.",
			"text3" : "The original plan called for indoor mushroom farming and experimenting with integrating ICT with food systems. The roof terrace was meant to be used to experiment with urban agriculture systems and clean technology testing.",
			"text4" : "A video of Metabolic in June shows us retrofitting the Overhoeks tower and preparing greywater treatment systems over the same weekend.",
			"text5" : "More than the best.",
			"img1" : "img/projects/whale2.jpg",
			"img2" : "img/projects/whale2.jpg",
			"img3" : "img/projects/whale2.jpg",
			"img4" : "img/projects/whale2.jpg",
			"img5" : "img/projects/whale2.jpg"
		},
		{
			"id" : 6,
			"title" : "Thailab",
			"subtitle" : "Analyze - Design - Experiment - Build",
			"text1" : "Metabolic is working with the Circle Economy to develop a methodology for systemic sustainability analysis.",
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
			"id" : 7,
			"title" : "Metabolic Lab",
			"subtitle" : "Design - Experiment - Build",
			"text1" : "Metabolic is working with the Circle Economy to develop a methodology for systemic sustainability analysis.",
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
	];

	// Load information into the projects divs on ready
	changeProjectInfo(0, projects[0]);

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