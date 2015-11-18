$(document).ready(function () {
    $(document).tooltip();
    $("#tabs").tabs();
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");


    $("#responsive-menu").mobileMenu();


    /*$("#radio").buttonset();
    $("#format").buttonset();*/

    $("#sticker").sticky({
        topSpacing: 0
    });

});