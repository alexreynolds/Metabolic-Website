jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.side-nav').find('li');
    var mobilelinks = $('.sub-nav').find('li'); // Links for mobile navigation
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    slide1 = $('#slide1');
    slide2 = $('#slide2');


    var bgindex = 1;    // Index of background image
    var indexmax = 6;   // Number of background images to scroll through

    var quotes = new Array();
    quotes[0] = "Metabolic is an action agency for societal transformation.";
    quotes[1] = "We pioneer tools and technologies that make sustainable resources available to everyone.";
    quotes[2] = "We advise companies and governments on how to transition to an equitable, circular economy.";
    quotes[3] = "We design smart systems that maximize synergies between people, the environment, and technology.";
    quotes[4] = "We’re currently co-developing the first closed-cycle neighborhood in Amsterdam.";
 

    preload([
        'img/slide1/bkg_01.jpg',
        'img/slide1/bkg_02.jpg',
        'img/slide1/bkg_03.jpg',
        'img/slide1/bkg_04.jpg',
        'img/slide1/bkg_05.jpg'
    ]);


    // Preloads images to smooth transition on first slide
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function () {
            $('<img />').attr('src',this).appendTo('body').css('display','none');
        });
    }

    // Changes background according to a timer
    setInterval( function() {

        bgindex++;

        changeBackground(bgindex);

    }, 6000);

    // Changes left/right arrows on mouseover
    /*$('.bgchange')
        .mouseover(function() { 
            //var src = $(this).attr("src").match(/[^\.]+/) + "_black.png";
            var src = $(this).attr("src").replace(".png", "_black.png");
            $(this).fadeOut(0, function() {
                $(this).attr("src", src);
            })
            .fadeIn(100);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("_black.png", ".png");
            $(this).fadeOut(0, function() {
                $(this).attr("src", src);
            })
            .fadeIn(10);
        });*/

    // Changes background image of slide 1 on click
    $('.bgchange').on('click', function() {

        btnVal = $(this).attr('id'); // Determines whether to shift forwards or backwards
        console.log("val: " + btnVal);
        
        if (btnVal == 'right') { bgindex++; }
        else { bgindex--; }

        changeBackground(bgindex);

    });

    $('#downarrow').on('click', function() {
        goToByScroll(2);
    });

    // Changes the background image of the first slide given the index of the next img
    function changeBackground(index) {

        if (index >= indexmax) { bgindex = 1; }         // Should never go over max
        else if (bgindex <= 0) { bgindex = indexmax; }  // Should never go under 0

        // Sets index of quote to display
        var quoteIndex = bgindex - 1;

        // Updates text shown on slide 1
        $('#quotecontainer').fadeOut(1000, function() {
            $('#quotetext').text(quotes[quoteIndex]);
            $(this).delay(1000).fadeIn(2000);
        });
        //$('#quotetext').text(quotes[quoteIndex]).fadeIn();

        // Gets URL of current background image
        var bgUrl = $('#slide1').css('background-image');
        bgUrl = bgUrl.replace('.jpg)','');  // Removes ending so number may be changed

        // Replaces number in URL with new background image index
        newUrl = bgUrl.substring(0, bgUrl.length - 1) +  bgindex + ".jpg)";
        $('#slide1').css('background-image', newUrl);
    }

    
    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    // Updates active slides while scrolling
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    // Scroll function for navigation
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1500, 'easeInOutQuint');
    }

    // Hide navigation when down arrow is reached
    $('#downarrow').waypoint(function() {
        $('.navigation').animate({ left: '-40px' }, 200);
    })

    // Navigation bar is only shown once the user scrolls past first slide
    slide2.waypoint(function() {
        $('.navigation').animate({ left: '-40px' }, 200);
    });

    // Navigation is hidden if user goes back to slide 1
    slide1.waypoint(function() {
        // SHOULD CHANGE WAYPOINT TO THE TEXT ON THE SLIDE
        //$('.navigation').hide();
        $('.navigation').animate({ left: '-210px' }, 200);
    });


    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    mobilelinks.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


    // Changes social media icons on mouseover
    $('.contacticon')
        .mouseover(function() { 
            //var src = $(this).attr("src").match(/[^\.]+/) + "_black.png";
            var src = $(this).attr("src").replace(".png", "_grey.png");
            $(this).fadeOut(0, function() {
                $(this).attr("src", src);
            })
            .fadeIn(100);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("_grey.png", ".png");
            $(this).fadeOut(0, function() {
                $(this).attr("src", src);
            })
            .fadeIn(10);
        });


});