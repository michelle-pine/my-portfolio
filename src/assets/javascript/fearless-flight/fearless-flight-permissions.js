var permissionFF = false;

$(document).ready(function() {
    if (window.location.pathname == "/projects/fearless_flight") {
        permissionFF = true;
        $.getScript("/assets/javascript/libraries/p5.sound.js").done(function() {
            $.getScript("/assets/javascript/fearless-flight/fearless-flight.js", function() {
            });
        });
    }
})

$(document).on('click', '#fearless_flight', function () {
    location.reload();
    
});
$(document).on('click', 'body', function () {
    if (window.location.href.indexOf("/projects/fearless_flight") > -1) {

        
    }
    else {
        permissionFF = false;

    }
});