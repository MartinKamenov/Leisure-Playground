// change the sezies of things dynamically
if ($("html").width() < 960) {
    $("#name-header").text("G F D");                                            //all of these are coppies if the page is loaded
}                                                                               //in a format which wont load all elements properly
if ($("html").width() < 915) {
    $('#search-menu').css("position", "relative");
}
if ($("html").width() < 500) {
    $('#registration-form').css({
        'position': 'relative',
        'display': '',
        'margin-left': '20px',
    });
    $('header').css("height", "300");
}
if ($("html").width() < 500) {
    $("main").css("width", "100%");
    $("#create-new-user").css("width", "300");
    $(".upload-project-form").css("width", "300");
}
$(window).resize(Resize);
$(window).scroll(Resize);
function Resize() {
    let windowWidth = $("html").width();
    //header
    if ($("html").width() < 960) {
        $("#name-header").text("G F D");
    }                                                                           // changes the header
    else {
        $("#name-header").text("GAMES FOR DEVELOPERS");
    }
    //searchbar
    if ($("html").width() < 915) {
        $('#search-menu').css("position", "relative");                                      //changes the sreachr menue
    }
    else {
        $('#search-menu').css("position", "absolute");
    }
    //the register page/uplod project pages                                                  //resizes them so they fit if the screen
    if ($("html").width() < 500) {                                                           //get too small
        $("main").css("width", "100%");
        $("#create-new-user").css("width", "300");
        $(".upload-project-form").css("width", "300");
    }
    else {
        $("main").css("width", "80%");
        $("#create-new-user").css("width", "400");
        $(".upload-project-form").css("width", "400");
    }
    //nav bar
    if ($(document).scrollTop() >= 149 && $("html").width() > 500) {
        $("nav").wrap("<div id='nav-wrap'></div>");                                         // makes the nav bar and search 
        $("#nav-wrap").css({                                                                //get a position:fixed when scrolled under
            'width': $("nav").width(),                                                      //and puts a div in its place so the page  
            'height': $("nav").height()                                                     //doesnt change sizes
        })
        $("#nav-wrap").css({
            'width': $("nav").width(),
            'height': $("nav").height()
        })
        $("nav").css({
            'position': 'fixed',
            'top': '0px',
            'width': windowWidth
        })
    }
    else {
        if ($(document).scrollTop() >= 299 && $("html").width() < 500) {
            $("nav").wrap("<div id='nav-wrap'></div>");
            $("#nav-wrap").css({
                'width': $("nav").width(),
                'height': $("nav").height()
            })
            $("nav").css({
                'position': 'fixed',
                'top': '0px',
                'width': windowWidth
            })
        }
        else {
            let navigation = $("#nav-wrap").contents();
            $("#nav-wrap").replaceWith(navigation);
            $("nav").css({
                'position': 'relative',
                'top': '',
                'width': "100%"
            })
        }
    }
    //register 
    if ($("html").width() < 500) {
        $('#registration-form').css({
            'position': 'relative',
            'display': '',                                                          //repositions the register 
            'margin-left': '20px',
        });
        $('header').css("height", "300");
    }
    else {
        $('#registration-form').css("position", "absolute");
        $('header').css("height", "150px");
    }
};



