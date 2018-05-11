var permissionFF = false;

$(document).ready(function() {
  if (window.location.pathname == "/projects/fearless_flight") {
    if (is.desktop()) {
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function() {
        callFunctionFromScript();
      };
      script.src = "/assets/javascript/libraries/p5.sound.js";
      head.appendChild(script);
      permissionFF = true;
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function() {
        callFunctionFromScript();
      };
      script.src = "/assets/javascript/fearless-flight/fearless-flight.js";
      head.appendChild(script);
    }
    if (is.not.desktop()) {
      $("#flight-contain").html(
        "This project is not supported on mobile or tablet."
      );
    }
  }
});

$(document).on("click", "#fearless_flight", function() {
  location.reload();
});
$(document).on("click", "body", function() {
  if (window.location.href.indexOf("/projects/fearless_flight") > -1) {
  } else {
    permissionFF = false;
  }
});
