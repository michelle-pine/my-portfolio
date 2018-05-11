var permissionWW = false;

$(document).ready(function() {
    if (window.location.pathname == "/projects/windy_weather") {
        permissionWW = true;
        $.getScript("/assets/javascript/libraries/p5.js", function() {
        });
        $.getScript("/assets/javascript/libraries/p5.dom.js", function() {
        });
        $.getScript("/assets/javascript/libraries/p5.sound.js", function() {
        });
        $.getScript("/assets/javascript/windy-weather/windy-weather.js", function() {
        });

       
    }

})

$(document).on('click', '#windy_weather', function () {
    location.reload();

});
$(document).on('click', 'body', function () {
    if (window.location.href.indexOf("/projects/windy_weather") > -1) {
    }
    else {
        permissionWW = false;

    }
});