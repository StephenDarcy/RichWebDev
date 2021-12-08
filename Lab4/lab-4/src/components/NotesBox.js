import './NotesBox.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NotesBox() {
    return (
        <Container className="notesBox">
            <Row>
                <Col md={8}>test</Col>
                <Col md={4}>test</Col>
            </Row>
        </Container>
    )

}

export default NotesBox;