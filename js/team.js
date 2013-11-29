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
		}
	]

	// Shows name div when team member image is hovered over
	$('.memberphoto').hover(function() {
        $(this).animate({opacity: 0}, 800);
	}, function() {
		$(this).animate({opacity: 1}, 800);
	});

	// Shows/hides the team member information div when image is clicked
	$('.memberphoto').on('click', function () {
		console.log("SHOW ZE SLOTHS");
	  if ( $( '#memberinfo' ).is( ':hidden' ) ) {
	    $( '#memberinfo' ).slideDown();
	  } else {
	    $( '#memberinfo' ).slideUp();
	  }
	});










});