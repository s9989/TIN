$(document).ready(function () {

    $('.menu-icon').on('click', function() {
        $('.content > .wrapper').toggleClass('collapsed');
        $('.menu').toggleClass('expanded');
    });
    
});