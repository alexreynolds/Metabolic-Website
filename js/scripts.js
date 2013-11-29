jQuery(document).ready(function ($) {


    $(window).stellar();

    var links = $('.side-nav').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');
    slide1 = $('#slide1');
    slide2 = $('#slide2');


    var bgindex = 1;    // Index of background image
    var indexmax = 6;   // Number of background images to scroll through


    preload([
        'img/slide1/background_01.jpg',
        'img/slide1/background_02.jpg',
        'img/slide1/background_03.jpg',
        'img/slide1/background_04.jpg',
        'img/slide1/background_05.jpg',
        'img/slide1/background_06.jpg'
    ]);


    // Preloads images to smooth transition on first slide
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function () {
            $('<img />').attr('src',this).appendTo('body').css('display','none');
            console.log('imgadded');
        });
    }

    // Changes left/right arrows on mouseover
    $('.bgchange')
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_black.png";
            $(this).fadeOut(100, function() {
                $(this).attr("src", src);
            })
            .fadeIn(100);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("_black.png", ".png");
            $(this).fadeOut(100, function() {
                $(this).attr("src", src);
            })
            .fadeIn(100);
        });

    // Changes background image of slide 1 on click
    $('.bgchange').on('click', function() {

        btnVal = $(this).val(); // Determines whether to shift forwards or backwards
        
        if (btnVal == 'forward') { bgindex++; }
        else { bgindex--; }

        if (bgindex >= indexmax) { bgindex = 1; }         // Should never go over max
        else if (bgindex <= 0) { bgindex = indexmax; }  // Should never go under 0

        // Gets URL of current background image
        var bgUrl = $('#slide1').css('background-image');
        console.log("bgUrl = " + bgUrl);
        bgUrl = bgUrl.replace('.jpg)','');  // Removes ending so number may be changed

        // Replaces number in URL with new background image index
        newUrl = bgUrl.substring(0, bgUrl.length - 1) +  bgindex + ".jpg)";
        console.log("newurl: " + newUrl);
        $('#slide1').css('background-image', newUrl);
        /*$('#slide1').fadeTo('slow', 0.5, function() {
            $(this).css('background-image', newUrl);
        }).fadeTo('slow', 1);*/
    });


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 1500, 'easeInOutQuint');
    }

    // Navigation bar is only shown once the user scrolls past first slide
    slide2.waypoint(function() {
        // SHOULD CHANGE WAYPOINT TO TEXT ON THE SLIDE
        //$('.navigation').show();
        $('.navigation').animate({ left: '0px' }, 200);
    });

    // Navigation is hidden if user goes back to slide 1
    slide1.waypoint(function() {
        // SHOULD CHANGE WAYPOINT TO THE TEXT ON THE SLIDE
        //$('.navigation').hide();
        $('.navigation').animate({ left: '-70px' }, 200);
    });


    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});