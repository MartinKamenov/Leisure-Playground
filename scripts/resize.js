// change the sezies of things dynamically
if ($("html").width() < 960) {
    $("#name-header").text("G F DEVS");                                            //all of these are coppies if the page is loaded
}                                                                               //in a format which wont load all elements properly
if ($("html").width() < 1000) {
    $('#search-menu').css("position", "relative");
}
if ($("html").width() < 570) {
    $('#registration-form').css({
        'position': 'relative',
        'display': '',
        'margin-left': '20px',
    });
    $('header').css("height", "300px");
    $('#searchWord').css("width", "180px")
}
if ($("html").width() < 500) {
    $(".project-type-header").css("width", "350px");
    $("main").css("width", "100%");
    $("#create-new-user").css("width", "300px");
    $(".upload-project-form").css("width", "300px");
    $("#JsCode").css("width", "300px")
    $("#Console").css("width", "300px")
}
if ($("html").width() < 750) {
    $(".home-text").css("width", "300px");
}
$(window).resize(Resize);
$(window).scroll(Resize);
function Resize() {
    let windowWidth = $("html").width();
    //header
    if ($("html").width() < 960) {
        $("#name-header").text("G F DEVS");
    }                                                                           // changes the header
    else {
        $("#name-header").text("GAMES FOR DEVELOPERS");
    }
    //searchbar
    if ($("html").width() < 1000) {
        $('#search-menu').css("position", "relative");                                      //changes the sreachr menue
    }
    else {
        $('#search-menu').css("position", "absolute");
    }
    //home text
    if ($("html").width() < 750) {
        $(".home-text").css("width", "300px");
    }
    else {
        $(".home-text").css("width", "600px");
    }

    //the register page/uplod project pages                                                  //resizes them so they fit if the screen
    if ($("html").width() < 500) {
        $(".project-type-header").css("width", "350px");                                                         //get too small
        $("main").css("width", "100%");
        $("#create-new-user").css("width", "300px");
        $(".upload-project-form").css("width", "300px");
        $("#JsCode").css("width", "300px")
        $("#Console").css("width", "300px")
    }

    else {
        $(".project-type-header").css("width", "400px");
        $("main").css("width", "80%");
        $("#create-new-user").css("width", "400px");
        $(".upload-project-form").css("width", "400px");
        $("#JsCode").css("width", "400px")
        $("#Console").css("width", "400px")
    }
    //nav bar
    if ($(document).scrollTop() >= 149 && $("html").width() > 570) {
        if ($('#nav-wrap').length === 0) {
            $("nav").wrap("<div id='nav-wrap'></div>");
        }                                                                               // makes the nav bar and search 
        $("#nav-wrap").css({                                                                //get a position:fixed when scrolled under
            'width': $("nav").width(),                                                      //and puts a div in its place so the page  
            'height': $("nav").height()                                                     //doesnt change sizes
        })
        $("nav").css({
            'position': 'fixed',
            'top': '0px',
            'width': windowWidth,
            'z-index': '100'
        })
    }
    else {
        if ($(document).scrollTop() >= 299 && $("html").width() < 570) {
            if ($('#nav-wrap').length === 0) {
                $("nav").wrap("<div id='nav-wrap'></div>");
            }
            $("#nav-wrap").css({
                'width': $("nav").width(),
                'height': $("nav").height()
            })
            $("nav").css({
                'position': 'fixed',
                'top': '0px',
                'width': windowWidth,
                'z-index': '100'
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
    if ($("html").width() < 570) {
        $('#registration-form').css({
            'position': 'relative',
            'display': '',                                                          //repositions the register 
            'margin-left': '20px',
        });
        $('header').css("height", "300px");
        $('#searchWord').css("width", "180px")
    }
    else {
        $('#registration-form').css("position", "absolute");
        $('header').css("height", "150px");
        $('#searchWord').css("width", "240px")
    }
    //kill da ninjas
    if ($("html").width() < 930 && $('.ninja-image').length !== 0) {                             //removes the ninjas 
        $('.ninja-image').remove();
    }
};

