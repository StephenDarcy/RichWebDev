import "./Note.css";

function Note(props) {
  return (
    <textarea style={{ backgroundColor: props.colour }} class="note">
      {props.text}
    </textarea>
  );
}

export default Note;
