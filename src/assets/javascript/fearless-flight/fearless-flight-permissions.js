var permissionFF = false;
if (window.location.pathname == "/projects/fearless_flight") {
    permissionFF = true;
}
$(document).on('click', '#fearless_flight', function () {
    location.reload();
    console.log("okay");
});
$(document).on('click', 'body', function () {
    if (window.location.href.indexOf("/projects/fearless_flight") > -1) {
        permissionFF = true;
    }
    else {
        permissionFF = false;
    }
});