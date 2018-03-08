//
// MENU STICKY
//

$( window ).scroll(function() {
    stickyHandler();
});

$( window ).resize(function() {
    removeSticky();
});

if ($(window).width() < 600) {
    addSticky();
}

var offsetNavBar = $('#mainNavigation').offset();

function stickyHandler() {
    if ($(window).scrollTop() >= (offsetNavBar.top + 50)) {
        addSticky();
    } else {
        removeSticky();
    }
}

function addSticky() {
    if (!$('#mainNavigation').hasClass('sticky')) {
        $('#mainNavigation').addClass('sticky');
        $('.navbar-brand').removeClass('d-sm-none');
        $('#content').addClass('m-top-50');
    }
}

function removeSticky() {
    if ($('#mainNavigation').hasClass('sticky')) {
        $('#mainNavigation').removeClass('sticky');
        $('.navbar-brand').addClass('d-sm-none');
        $('#content').removeClass('m-top-50');
        offsetNavBar = $('#mainNavigation').offset();
    }
}

//
// ZOOM IMG
//

$( document ).ready(function() {
    $('.zoomImg').click(function() {
        var urlImg = $(this).data('zoomUrl');
        if (urlImg) {
            $('#zoomModalImg').attr('src', urlImg);
            $('#modalImg').modal('toggle');
        }
    })
});