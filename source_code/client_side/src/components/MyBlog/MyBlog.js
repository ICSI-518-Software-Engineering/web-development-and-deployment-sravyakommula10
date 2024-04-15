import React, { useState } from "react";

import photo from "../../Images/photo.png";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { getService } from "../../API/api";

const MyBlog = () => {
  const initialDescription =
    "Hello! I'm Sravya Kommula, currently pursuing MS in Computer Science at SUNY ALBANY.";

  const [user, setUser] = useState("Sravya");
  const [description, setDescription] = useState(initialDescription);
  const [descDisabled, setDescDisabled] = useState(true);

  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [reactSum, setReactSum] = useState(null);
  const [serverSum, setServerSum] = useState(null);

  const handleEdit = () => {
    setDescDisabled(false);
    setUser(user);
    setDescription(description);
  };

  const handleUpdate = () => {
    setDescDisabled(true);
  };

  const handleCancel = () => {
    if (!descDisabled) {
      setUser(user);
      setDescription(initialDescription);
    }
    setDescDisabled(true);
  };

  const getOutputClass = () => {
    return reactSum != null && Number.isInteger(reactSum)
      ? "positive"
      : "negative";
  };

  const getOutputServerClass = () => {
    return serverSum != null ? "positive" : "negative";
  };

  const handleSum = async () => {
    const finalSum = parseInt(numOne) + parseInt(numTwo);
    if (Number.isInteger(finalSum)) {
      setReactSum(finalSum);
    } else {
      setReactSum(null);
    }

    const payload = {
      method: "POST",
      url: "http://localhost:3000/add",

      data: {
        numOne: parseInt(numOne),
        numTwo: parseInt(numTwo),
      },
    };

    try {
      const response = await getService(payload);
      setServerSum(response?.data.sum);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setServerSum(null);
        alert("Enter valid data");
      } else {
        console.error("An unexpected error occurred:", error.message);
      }
    }
  };

  return (
    <>
      <div className="wholeSection">
        <Container className="userSection mb-5">
          <Row>
            <Col sm={1}></Col>
            <Col sm={2}>
              {" "}
              <img className="photo" src={photo} alt="Sravya" />
            </Col>
            <Col sm={2}></Col>
            <Col sm={6}>
              <Form>
                <Form.Group>
                  <Form.Control
                    className="mb-4"
                    type="text"
                    placeholder="Enter your name"
                    value={user}
                    name="user"
                    disabled={descDisabled}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    className="mb-4"
                    as="textarea"
                    rows={4}
                    placeholder="Enter your description"
                    value={description}
                    name="description"
                    disabled={descDisabled}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <Button
                variant="secondary"
                className="editButton"
                onClick={handleEdit}
              >
                Edit
              </Button>
              <Button
                variant="outline-success"
                className="updateButton"
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                variant="outline-danger"
                className="cancelButton"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row className="mb-4">
            <h4 className={""}>
              Hello, can you provide your inputs to add 2 numbers
            </h4>
          </Row>
          <Row className="mb-4">
            <Col sm={1}></Col>
            <Col>
              <Form>
                <Form.Group as={Row} className="mb-4">
                  <Form.Label column sm="3">
                    Enter First Number:
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control
                      type="number"
                      placeholder="Enter first number"
                      value={numOne}
                      onChange={(e) => setNumOne(parseInt(e.target.value))}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm="3">
                    Enter Second Number:
                  </Form.Label>
                  <Col sm="4">
                    <Form.Control
                      type="number"
                      placeholder="Enter second number"
                      value={numTwo}
                      onChange={(e) => setNumTwo(parseInt(e.target.value))}
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col sm={1}></Col>

            <Col sm={2}>
              <Button variant="outline-primary" onClick={handleSum} size="lg">
                Submit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col>
              <h4 className={`output ${getOutputServerClass()}`}>
                <strong>
                  {" "}
                  Your addition Result (from server) is: {serverSum}
                </strong>
              </h4>
              <h4 className={`output ${getOutputClass()}`}>
                <strong>
                  {" "}
                  Your addition Result (from ReactJS) is: {reactSum}
                </strong>
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyBlog;
