const colourHighlight = "colour-click";
let noteID = 1;

$(document).ready(function() {
    $(".colour").click(function() {
        let clicked = $(this).css("background-color");
        $("#textarea").css("background-color", clicked);
        $(".colour").removeClass(colourHighlight);
        $(this).addClass(colourHighlight);
    });

    $(".save-button").click(function(e) {
        e.preventDefault();
        let noteText = $("#textarea").val();
        $(".notes-list").append(
            "<li id='list" +
            noteID +
            "'><div class='note' id='note" +
            noteID +
            "'><button class='delete-button' id='" +
            noteID +
            "'> X </button>" +
            "<textarea class = 'textOnNote' id='text" +
            noteID +
            "'>" +
            noteText +
            "</textarea></div></li>"
        );
        let noteColour = $("#textarea").css("background-color");
        $("#text" + noteID).css("background", noteColour);
        $("#note" + noteID).css("background", noteColour);
        noteID++;
        $("#textarea").val("");
    });

    $("ul").on("click", ".delete-button", function() {
        $(this).parent().remove();
    });
});