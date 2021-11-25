const { text } = require("body-parser");
const { fromEvent } = require("rxjs");

let saveButton = document.getElementsByClassName("save-button");
let colourBox = document.getElementsByClassName("colour");
let notesList = document.getElementById("notes-list");

//static elements that will be added dynamically
const deleteButton = document.createElement("button");
deleteButton.className += "delete-button";
const li = document.createElement("li");
const div = document.createElement("div");
div.className += "note";
const textarea = document.createElement("textarea");
textarea.className += "textOnNote";

let noteID = 0;

fromEvent(saveButton, "click").subscribe(() => {
  let noteText = document.getElementById("textarea").value;

  textarea.value = noteText;
  textarea.id = "TextBox " + noteID;
  deleteButton.textContent = " x ";
  deleteButton.id = "DeleteBtn " + noteID;
  div.appendChild(deleteButton);
  div.appendChild(textarea);

  div.id = "NoteDiv " + noteID;
  li.appendChild(div);

  li.id = "ListItem " + noteID;
  notesList.appendChild(li);

  document.getElementById("TextBox " + noteID).style.backgroundColor =
    textarea.style.backgroundColor;

  document.getElementById("NoteDiv " + noteID).style.backgroundColor = "red";

  textarea.value = " ";
  noteID++;
});

fromEvent(colourBox, "click").subscribe((e) => {});

/*
const colourHighlight = "colour-click";

$(document).ready(function () {
  $(".colour").click(function () {
    let clicked = $(this).css("background-color");
    $("#textarea").css("background-color", clicked);
    $(".colour").removeClass(colourHighlight);
    $(this).addClass(colourHighlight);
  });

  $(".save-button").click(function (e) {
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

  $("ul").on("click", ".delete-button", function () {
    $(this).parent().remove();
  });
}); */
