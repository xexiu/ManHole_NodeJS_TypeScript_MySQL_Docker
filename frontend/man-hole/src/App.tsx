import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import './App.css';

function App() {
  const [error, setError] = useState(false);
  const [successText, setSuccessText] = useState('');
  const [values, setValues] = useState({
    radio: 0,
    material: 'iron',
    decoration: true,
  });

  const handleInputData = (e: any) => {
    const { value, name } = e.target;

    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const submitFormData = (e: any) => {
    e.preventDefault();
    const { radio, material, decoration } = values;

    // checking if value of first name and last name is empty show error else take to next step
    if (!radio || !material) {
      setError(true);
    }

    const manHoleObj = {
      manHole: {
        radio,
        material,
        decoration
      }
    }

    axios
      .post('http://localhost:8080/api/manhole_cover/build', manHoleObj)
      .then(() => {
        setSuccessText(`${JSON.stringify(manHoleObj)} Success!`)
      })
      .catch(err => {
        setSuccessText(`ManHole creating... FAILED ${err.message}`);
      });
  };

  return (
    <Container className="p-3">
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Radio</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="radio"
                type="text"
                placeholder={String(values.radio)}
                onChange={handleInputData}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Material</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="material"
                type="text"
                placeholder={values.material}
                onChange={handleInputData}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Decoration</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="decoration"
                type="text"
                placeholder={String(values.decoration)}
                onChange={handleInputData}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
            <p>{successText}</p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
