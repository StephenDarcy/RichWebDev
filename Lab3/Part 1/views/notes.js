const { fromEvent } = require("rxjs");

let saveButton = document.getElementsByClassName("save-button");
let colourBox = document.getElementsByClassName("colour");
let notesList = document.getElementById("notes-list");
let textBox = document.getElementById("textarea");
let noteID = 0;

fromEvent(saveButton, "click").subscribe(() => {
  let noteText = textBox.value;
  let noteColour = textBox.className;

  let deleteButton = document.createElement("button");
  deleteButton.className += "delete-button";
  deleteButton.textContent = " x ";
  deleteButton.id = "DeleteBtn " + noteID;

  let li = document.createElement("li");
  li.id = "ListItem " + noteID;

  let div = document.createElement("div");
  div.className += "note";
  div.id = "NoteDiv " + noteID;
  div.style.backgroundColor = noteColour;

  let textarea = document.createElement("textarea");
  textarea.className += "textOnNote";
  textarea.id = "TextBox " + noteID;
  textarea.style.backgroundColor = noteColour;

  div.appendChild(deleteButton);
  div.appendChild(textarea);
  li.appendChild(div);
  notesList.appendChild(li);

  document.getElementById("TextBox " + noteID).value = noteText;
  document.getElementById("textarea").value = "";
  noteID++;
});

fromEvent(colourBox, "click").subscribe((e) => {
  let clicked = e.target.className.split(" ")[1];

  document.getElementById("textarea").className = clicked;

  let colourBoxes = document.getElementsByClassName("colour");
  for (let i = 0; i < colourBoxes.length; i++) {
    if (colourBoxes[i] instanceof HTMLElement) {
      colourBoxes[i].classList.remove("colour-click");
    }
  }

  e.target.className += " colour-click";
});

fromEvent(document.body, "click").subscribe((e) => {
  if (e.target.className == "delete-button") {
    let node = e.target;
    node.parentNode.parentNode.removeChild(node.parentNode);
  }
});

/*
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
