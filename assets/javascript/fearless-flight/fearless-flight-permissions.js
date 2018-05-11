var permissionFF = false;

$(document).ready(function() {
    if (window.location.pathname == "/projects/fearless_flight") {
        $.getScript("/assets/javascript/libraries/p5.js", function() {
        });
        $.getScript("/assets/javascript/libraries/p5.dom.js", function() {
        });
        $.getScript("/assets/javascript/libraries/p5.sound.js", function() {
        });
        $.getScript("/assets/javascript/fearless-flight/fearless-flight.js", function() {
        });
        permissionFF = true;
    
       
    }
})

$(document).on('click', '#fearless_flight', function () {
    location.reload();
    console.log("okay");
    
});
$(document).on('click', 'body', function () {
    if (window.location.href.indexOf("/projects/fearless_flight") > -1) {

        
    }
    else {
        permissionFF = false;

    }
});