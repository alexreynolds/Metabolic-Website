/* Scripts to handle the team information slides */

jQuery(document).ready(function ($) {

	var team = [
		{
			"firstname" : "Eva",
			"lastname" : "Gladek",
			"position" : "Founder & CEO",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Chris",
			"lastname" : "Monaghan",
			"position" : "COO",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Sanderine",
			"lastname" : "van Odijk",
			"position" : "CFO",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Matthew",
			"lastname" : "Fraser",
			"position" : "Director of Consulting",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Philip",
			"lastname" : "Gladek",
			"position" : "Tech & Business Developer",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Maxim",
			"lastname" : "Amosov",
			"position" : "Lead Systems Engineer",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Floor",
			"lastname" : "van Bovene",
			"position" : "Project Developer",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},

		{
			"firstname" : "Wouter",
			"lastname" : "Hassing",
			"position" : "Chief of Mushrooms",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},

		{
			"firstname" : "Guus",
			"lastname" : "van der Ven",
			"position" : "Community Coordinator",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Ward",
			"lastname" : "Hupperets",
			"position" : "Founder & CEO",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Alex",
			"lastname" : "Reynolds",
			"position" : "Aesthetic Overlord",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Eike",
			"lastname" : "Schramm",
			"position" : "Financial Manager",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Christie",
			"lastname" : "Mettes",
			"position" : "Thailab Coordinator",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Chud",
			"lastname" : "Samwong",
			"position" : "Thailab Community Manager",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Tony",
			"lastname" : "Sevold",
			"position" : "Thailab Research Manager",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
		},
		{
			"firstname" : "Wieneke",
			"lastname" : "Olthof",
			"position" : "Flow Manager",
			"description" : "Lalalala something",
			"email" : "mail@mail.com",
			"phone" : "123456789",
			"linkedin" : "www.url.com"
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