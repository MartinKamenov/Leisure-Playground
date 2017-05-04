// change the sezies of things dynamically
if ($("html").width() < 960) {
    $("#name-header").text("G F D");
}
if ($("html").width() < 915) {
    $('#search-menu').css("position", "relative");
}
if ($("html").width() < 500) {
        $('#registration-form').css("position", "relative");
        $('header').css("height","300" );
    }
$(window).resize(myFunc);
$(window).scroll(myFunc);
function myFunc() {
    let windowWidth = $("html").width();
    if ($("html").width() < 960) {
        $("#name-header").text("G F D");
    }
    else {
        $("#name-header").text("GAMES FOR DEVELOPERS");
    }
    if ($("html").width() < 915) {
        $('#search-menu').css("position", "relative");
    }
    else {
        $('#search-menu').css("position", "absolute");
    }
    if ($(document).scrollTop() >= 149) {
        $("nav").css({
            'position': 'fixed',
            'top': '0px',
            'width': windowWidth
        })
    }
    else {
        $("nav").css({
            'position': 'relative',
            'top': '',
            'width': "100%"
        })
    }
    if ($("html").width() < 500) {
        $('#registration-form').css("position", "relative");
        $('header').css("height","300" );
    }
    else {
        $('#registration-form').css("position", "absolute");
        $('header').css("height", "150px");
    }
};



