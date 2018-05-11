var permissionWW = false;

$(document).ready(function() {
  if (window.location.pathname == "/projects/windy_weather") {
    if (is.desktop()) {
      permissionWW = true;
      $.getScript(
        "/assets/javascript/windy-weather/windy-weather.js",
        function() {}
      );
    }
    if (is.not.desktop()) {
      $("#flight-contain").html(
        "This project is not supported on mobile or tablet."
      );
    }
  }
});

$(document).on("click", "#windy_weather", function() {
  location.reload();
});
$(document).on("click", "body", function() {
  if (window.location.href.indexOf("/projects/windy_weather") > -1) {
  } else {
    permissionWW = false;
  }
});
