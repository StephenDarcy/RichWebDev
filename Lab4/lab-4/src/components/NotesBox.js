import "./NotesBox.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Colour from "./Colour";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { currentColour } from "./ColourSlice";
import { setText, currentText } from "./TextSlice";
import { useState } from "react";
import Note from "./Note";

function NotesBox() {
  const dispatch = useDispatch();

  const colour = useSelector(currentColour);
  const text = useSelector(currentText);

  const [noteText, setNoteText] = useState("");
  const [currentNoteID, setNoteID] = useState(0);
  const [noteList, setNextNote] = useState([]);

  const handleSave = () => {
    dispatch(setText(noteText));

    console.log(text, colour, currentNoteID);

    setNextNote((currentNote) => [
      ...currentNote,
      <Note id={currentNoteID} text={noteText} colour={colour} />,
    ]);

    console.log(noteList);

    setNoteID(currentNoteID + 1);
  };

  const removeNote = (id) => {
    console.log(id);
    const newList = noteList.filter((n) => n.props.id !== id);
    setNextNote(newList);

    console.log(noteList);
  };

  return (
    <Container className="notesBox">
      <Row style={{ height: "100%" }}>
        <Col className="left">
          <Container>
            <Row className="text-center">
              <h3 style={{ color: "#c3073f" }}>
                Choose a colour for your note
              </h3>
              <Container>
                <Row>
                  <Col>
                    <Colour colour="red" />
                  </Col>
                  <Col>
                    <Colour colour="pink" />
                  </Col>
                  <Col>
                    <Colour colour="orange" />
                  </Col>
                  <Col>
                    <Colour colour="yellow" />
                  </Col>
                  <Col>
                    <Colour colour="purple" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Colour colour="green" />
                  </Col>
                  <Col>
                    <Colour colour="blue" />
                  </Col>
                  <Col>
                    <Colour colour="brown" />
                  </Col>
                  <Col>
                    <Colour colour="white" />
                  </Col>
                  <Col>
                    <Colour colour="grey" />
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                <h5 style={{ color: "#c3073f" }}>Write a note:</h5>
              </Col>
              <Col>
                <Button
                  onClick={handleSave}
                  className="saveButton"
                  variant="outline-success"
                >
                  Save
                </Button>
              </Col>
            </Row>
            <Row>
              <div className="note-box">
                <textarea
                  onChange={(e) => {
                    setNoteText(e.target.value);
                  }}
                  className="text-box"
                  placeholder="Start typing here..."
                  style={{ backgroundColor: colour }}
                ></textarea>
              </div>
            </Row>
          </Container>
        </Col>
        <Col className="right">
          <ul>
            {noteList.map((el) => (
              <li key={el.props.id} id={el.props.id}>
                <div
                  style={{
                    backgroundColor: el.props.colour,
                  }}
                >
                  <p onClick={() => removeNote(el.props.id)} className="delete">
                    x
                  </p>
                </div>
                {el}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default NotesBox;
