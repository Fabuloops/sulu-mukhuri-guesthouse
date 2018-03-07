//
// MENU STICKY
//

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunc()};

// Get the navbar
var navbar = document.getElementById("mainNavigation");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        $('.navbar-brand').removeClass('d-sm-none');
    } else {
        navbar.classList.remove("sticky");
        $('.navbar-brand').addClass('d-sm-none');
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