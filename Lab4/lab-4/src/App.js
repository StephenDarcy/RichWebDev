import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NotesBox from "./components/NotesBox";

function App() {
  return (
    <Container>
      <Row className="content">
        <Col>
          <h1>Simple Note Taking App</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <NotesBox />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
