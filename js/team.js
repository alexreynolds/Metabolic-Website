/* Scripts to handle the team information slides */

jQuery(document).ready(function ($) {

	var team = [
		{
			"firstname" : "Eva",
			"lastname" : "Gladek",
			"position" : "Founder & CEO",
			"description" : "Eva is an industrial ecologist, biologist, and systems architect. Eva started Metabolic to take concrete action towards society’s most pressing problems.",
			"email" : "eva@metaboliclab.nl",
			"phone" : "+31 (0)6 31058050",
			"linkedin" : "http://www.linkedin.com/profile/view?id=6505954"
		},
		{
			"firstname" : "Chris",
			"lastname" : "Monaghan",
			"position" : "COO",
			"description" : "Chris has a background in politics and management. He is responsible for Metabolic’s people, operations, and project development.",
			"email" : "chris@metaboliclab.nl",
			"phone" : "+31 (0)6 55818565",
			"linkedin" : "http://www.linkedin.com/profile/view?id=41390362"
		},
		{
			"firstname" : "Sanderine",
			"lastname" : "van Odijk",
			"position" : "CFO",
			"description" : "Sanderine has a background in cleantech integration in the built environment. Before joining Metabolic she was a project director for sustainability at Waternet, Amsterdam’s public water utility.",
			"email" : "sanderine@metaboliclab.nl",
			"phone" : "+31 (0)6 39470933",
			"linkedin" : "http://www.linkedin.com/profile/view?id=43349558"
		},
		{
			"firstname" : "Matthew",
			"lastname" : "Fraser",
			"position" : "Director of Consulting",
			"description" : "Matthew received his Master’s in Industrial Ecology from TU Delft and a degree in Industrial Design from the University of Ontario. He is a product designer, communications manager, and systems analyst.",
			"email" : "matthew@metaboliclab.nl",
			"phone" : "+31 (0)6 39130941",
			"linkedin" : "http://www.linkedin.com/profile/view?id=23638611"
		},
		{
			"firstname" : "Wouter",
			"lastname" : "Hassing",
			"position" : "Networks Manager",
			"description" : "Wouter is an expert mycologist, programmer, and agroscientist. He is part of Metabolic’s technical team and directs the technical side of sensor and food systems.",
			"email" : "wouter@metaboliclab.nl",
			"phone" : "+31 (0)6 50737690",
			"linkedin" : "http://www.linkedin.com/profile/view?id=53518772"
		},
		{
			"firstname" : "Maxim",
			"lastname" : "Amosov",
			"position" : "Systems Designer",
			"description" : "Max has a background in real estate and a Masters in Urban Environmental Management. He is a designer and developer of sanitation systems and complex networks.",
			"email" : "maxim@metaboliclab.nl",
			"phone" : "+31 (0)6 85185210",
			"linkedin" : "http://www.linkedin.com/profile/view?id=44906310"
		},
		{
			"firstname" : "Ward",
			"lastname" : "Hupperets",
			"position" : "Technical Developer & Engineering",
			"description" : "Ward is a mechanical engineer focused on cleantech engineering. As part of our technical implementation team, he designs, builds, tests, and implements technical systems.",
			"email" : "ward@metaboliclab.nl",
			"phone" : "+31 (0)6 22225973",
			"linkedin" : "http://www.linkedin.com/profile/view?id=158244555"
		},
		{
			"firstname" : "Philip",
			"lastname" : "Gladek",
			"position" : "Technical & Business Developer",
			"description" : "Philip received his degree in business from the UCLA Marshall School of Business. He is an experienced business administrator, entrepreneur, and self-taught engineer.",
			"email" : "philip@metaboliclab.nl",
			"phone" : "+31 (0)6 83437740",
			"linkedin" : "#"
		},

		{
			"firstname" : "Guus",
			"lastname" : "van der Ven",
			"position" : "Community Coordinator",
			"description" : "Guus is a builder, perpetual learner, connector, and humanist. He organizes Metabolic’s volunteer community, assists in construction and technology development, and scavenges resources across the Netherlands.",
			"email" : "guus@metaboliclab.nl",
			"phone" : "+31 (0)6 16407165",
			"linkedin" : "nl.linkedin.com/pub/guus-van-der-ven/76/298/a77"
		},
		{
			"firstname" : "Alex",
			"lastname" : "Reynolds",
			"position" : "Designer",
			"description" : "Alex hails from the United States, where she received her degree in Computer Science. She is our design and user experience guru, as well as a programmer and marketing strategist.",
			"email" : "alex@metaboliclab.nl",
			"phone" : "+31 (0)6 40514078",
			"linkedin" : "nl.linkedin.com/pub/alexandra-reynolds/47/326/1b4/"
		},
		{
			"firstname" : "Floor",
			"lastname" : "van Bovene",
			"position" : "Project Developer",
			"description" : "Floor has background in biology and business. At Metabolic, she works on project development, research and analysis, and organizational management.",
			"email" : "floor@metaboliclab.nl",
			"phone" : "+31 (0)6 41681411",
			"linkedin" : "http://www.linkedin.com/profile/view?id=57470902"
		},
		{
			"firstname" : "Eike",
			"lastname" : "Schramm",
			"position" : "Financial Manager",
			"description" : "Eike has a degree in business and is Metabolic’s Financial Manager. He works on investment strategy, financial controlling, and budgeting.",
			"email" : "eike@metaboliclab.nl",
			"phone" : "+31 (0)6 44687921",
			"linkedin" : "nl.linkedin.com/pub/eike-schramm/69/b11/92b"
		},
		{
			"firstname" : "Wieneke",
			"lastname" : "Olthof",
			"position" : "Flow Manager",
			"description" : "Wieneke is working part-time as Eva’s executive assistant and company-wide facilitator of better knowledge and communication flow.",
			"email" : "wieneke@metaboliclab.nl",
			"phone" : "+31 (0)6 10683809",
			"linkedin" : "nl.linkedin.com/pub/wieneke-olthof/3a/aaa/118"
		},
		{
			"firstname" : "Christie",
			"lastname" : "Mettes",
			"position" : "Thailab Administrative Coordinator",
			"description" : "Christie began her work with Metabolic as a Master’s student from Utrecht University, assisting to research and design the Cleantech Playground. She then went to Northern Thailand to research slum communities and water quality. Christie now acts as the coordinator of Thailab, Metabolic’s field office in Northern Thailand.",
			"email" : "christie@metaboliclab.nl",
			"phone" : "n/a",
			"linkedin" : "th.linkedin.com/pub/christie-mettes/6b/196/b2a"
		},
		{
			"firstname" : "Tony",
			"lastname" : "Sevold",
			"position" : "Thailab Research Coordinator",
			"description" : "Tony began his work with Metabolic as a Master’s student from Utrecht University, assisting to research and design the Cleantech Playground. He’s now the coordinator of research and development at Thailab.",
			"email" : "tony@metaboliclab.nl",
			"phone" : "n/a",
			"linkedin" : "th.linkedin.com/pub/tony-sevold/14/165/217"
		},
		{
			"firstname" : "Chud",
			"lastname" : "Samwong",
			"position" : "Thailab Community Coordinator",
			"description" : "Chud is an engineer and translator. He met up with Metabolic’s research team in Thailand and acted as their translator and community liaison. He decided that he liked the group and the mission so much that he wanted to stay and work on the project. Chud now acts as the coordinator of community involvement at Thailab.",
			"email" : "chudwork62@gmail.com",
			"phone" : "n/a",
			"linkedin" : "#"
		}
	];

	// Shows name div when team member image is hovered over
	$('.memberphoto').hover(function() {
        $(this).animate({opacity: 0}, 800);
	}, function() {
		$(this).animate({opacity: 1}, 800);
	});

	// Edits & shows/hides the team member information div when image is clicked
	$('.memberphoto').on('click', function () {
		// Get name value of the clicked item
	  	var firstname = $(this).attr('id');
	  	// Get name of member currently described in div
	  	var currname = $('#member_name').text();
	  	// Gets first name of member in div
	  	var currfirst = currname.slice(0, currname.indexOf(" "));

	  	// Get src of image clicked
	  	var imgsrc = $(this).attr('src');

		// Edits text inside and shows if hidden
	  if ( $( '#memberinfo' ).is( ':hidden' ) ) {

	  	changeInfo(firstname, imgsrc);
		
	  } else {
	  	console.log("firstname: " + firstname);
	  	console.log("currname: " + currfirst);
	  	// If the same image is clicked twice
	  	if (firstname == currfirst) {
	  		console.log('SAMENAME YO');
		  	// Hide div, information has already been shown
		    $( '#memberinfo' ).slideUp();
		} else {
			// Change information shown in div
			changeInfo(firstname, imgsrc);
		}
	  }
	});

	// Changes the information in the detailed member information div
	function changeInfo(firstname, imgsrc) {
		var currmember = $.grep(team, function(e){ return e.firstname == firstname; });

		if (currmember.length == 1) {
			currmember = currmember[0];
		} else {
			console.log("Uh oh, multiple people with the same name...");
		}

		// Edits values to be shown in the hidden div
		$('#member_name').text(currmember.firstname + " " + currmember.lastname);
		$('#member_desc').text(currmember.description);
		$('#member_email').text(currmember.email);
		$('#member_phone').text(currmember.phone);
		$('#member_linkedin').attr('href', currmember.linkedin);
		$('#member_linkedin').text(currmember.firstname + "'s LinkedIn");
		$('#detailphoto').attr('src', imgsrc);

		// Show div
	    $( '#memberinfo' ).slideDown();
	}










});