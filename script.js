$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });
});


$(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 200) {
        $('.nav-menu').addClass('custom-navbar');
    } else {
        $('.nav-menu').removeClass('custom-navbar');
    }
});


$(window).scroll(function() {
    // checking the  condition
    if ($(window).width() > 768 && $(window).scrollTop() >= 1080) {
        $('.picture-1').addClass('fromLeft');
        $('.picture-2').addClass('fromRight');
    } else {
        $('.picture-1').removeClass('fromLeft');
        $('.picture-2').removeClass('fromRight');
    };

    if ($(window).width() > 768 && $(window).scrollTop() >= 1500) {
        $('.picture-3').addClass('fromLeft');
        $('.picture-4').addClass('fromRight');
    } else {
        $('.picture-3').removeClass('fromLeft');
        $('.picture-4').removeClass('fromRight');
    };

    if ($(window).width() > 768 && $(window).scrollTop() >= 2180) {
        $('.picture-5').addClass('fromLeft');
        $('.picture-6').addClass('fromRight');
    } else {
        $('.picture-5').removeClass('fromLeft');
        $('.picture-6').removeClass('fromRight');
    };

    if ($(window).width() > 768 && $(window).scrollTop() >= 2600) {
        $('.picture-7').addClass('fromLeft');
        $('.picture-8').addClass('fromRight');
    } else {
        $('.picture-7').removeClass('fromLeft');
        $('.picture-8').removeClass('fromRight');
    };

    if ($(window).width() > 768 && $(window).scrollTop() >= 2900) {
        $('.picture-9').addClass('fromLeft');
        $('.picture-10').addClass('fromRight');
    } else {
        $('.picture-9').removeClass('fromLeft');
        $('.picture-10').removeClass('fromRight');
    };

    if ($(window).width() > 768 && $(window).scrollTop() >= 3250) {
        $('.picture-11').addClass('fromLeft');
        $('.picture-12').addClass('fromRight');
    } else {
        $('.picture-11').removeClass('fromLeft');
        $('.picture-12').removeClass('fromRight');
    };
});