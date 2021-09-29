var colourHighlight = "colour-click";

$(document).ready(function () {
  $(".colour").click(function () {
    var clicked = $(this).css("background-color");
    $("#textarea").css("background-color", clicked);
    $(".colour").removeClass(colourHighlight);
    $(this).addClass(colourHighlight);
  });
});
