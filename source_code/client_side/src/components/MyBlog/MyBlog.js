import React, { useState } from "react";

import photo from "../../Images/photo.png";
import { Navbar, Form, Container, Row, Col, Button } from "react-bootstrap";
import mylogo from "../../Images/mylogo.jpeg";
import { getService } from "../../API/api";

const MyBlog = () => {
  const [user, setUser] = useState("Sravya");
  const [description, setDescription] = useState(
    "Hello! I'm Sravya Kommula, currently pursuing MS in Computer Science at SUNY ALBANY. My dream is to work for MICROSOFT and utilize my expertise to develop complex projects efficiently and with quality. I aim to enhance my knowledge in Computer Science to benefit future generations and contribute to making the world a better place to live."
  );

  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [reactSum, setReactSum] = useState(null);
  const [serverSum, setServerSum] = useState(null);

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
      url: "http://3.12.108.133:5001/add",

      data: {
        numOne: parseInt(numOne),
        numTwo: parseInt(numTwo),
      },
    };

    try {
      const response = await getService(payload);
      setServerSum(response.data.sum);
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
      <Navbar variant="light" className="navBar">
        <Navbar.Brand href="#home" className="custom-nav">
          {/* <img
            alt="Media Library"
            src={mylogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "} */}
          <p class="title"> Sravya Kommula</p>
        </Navbar.Brand>
      </Navbar>
      <div className="wholeSection">
        <Container className="userSection mb-5">
          <Row>
            <Col sm={1}></Col>
            <Col sm={2}>
              {" "}
              <img className="photo" src={photo} alt="Sravya" />
            </Col>
            <Col sm={1}></Col>
            <Col sm={6}>
              <h4 className="app-intro"> Hello Welcome to Application</h4>
              <Form>
                <Form.Group>
                  <Form.Control
                    className="mb-4"
                    type="text"
                    placeholder="Enter your name"
                    value={user}
                    name="user"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your description"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
        <div className="mt-5 addition">
          <h4 className={"addition-title"}>
            Please provide inputs for addition:
          </h4>
          <Form className="form">
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm="6">
                Enter First Number:
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  type="number"
                  placeholder="Enter first number"
                  value={numOne}
                  onChange={(e) => setNumOne(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="6">
                Enter Second Number:
              </Form.Label>
              <Col sm="6">
                <Form.Control
                  type="number"
                  placeholder="Enter second number"
                  value={numTwo}
                  onChange={(e) => setNumTwo(parseInt(e.target.value))}
                />
              </Col>
            </Form.Group>
          </Form>

          <Button
            variant="primary"
            className="addition-button"
            onClick={handleSum}
            size="lg"
          >
            Click to Add Numbers
          </Button>
          <div className="result">
            <h5 className={`output ${getOutputServerClass()}`}>
              <strong>
                {" "}
                Your addition Result (from server) is: {serverSum}
              </strong>
            </h5>
            <h5 className={`output ${getOutputClass()}`}>
              <strong>
                {" "}
                Your addition Result (from ReactJS) is: {reactSum}
              </strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBlog;
