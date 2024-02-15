import React, { useState } from "react";

import photo from '../../Images/photo.png';
import { Navbar, Form, Container, Row, Col,Button } from "react-bootstrap";
import mylogo from '../../Images/mylogo.jpeg';

const MyBlog = () => {
    const [user, setUser] = useState("Sravya");
    const [description, setDescription] = useState(
        "Hello! I'm Sravya Kommula, currently pursuing MS in Computer Science at SUNY ALBANY. My dream is to work for MICROSOFT and utilize my expertise to develop complex projects efficiently and with quality. I aim to enhance my knowledge in Computer Science to benefit future generations and contribute to making the world a better place to live."
    );
    const [numOne, setNumOne] = useState("");
    const [numTwo, setNumTwo] = useState("");
    const [reactSum, setReactSum] = useState(null);

    const getOutputClass = () => {
        return reactSum > 0 ? 'positive' : 'negative';
    };

    const handleSum = async () => {
        setReactSum(numOne + numTwo);
        
    };


    return (
        <>
        <Navbar variant="light" className="navBar">
            <Navbar.Brand href="#home" className="custom-nav">
                <img
                    alt="Media Library"
                    src={mylogo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{" "}
                <p>Sravya</p>
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

            <Container className="mt-5">
                <Row className="mb-4">
                    <h4 className={""}>
                        Hello {user},  can you provide your inputs to add 2 numbers
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
                            add
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}></Col>
                    <Col>


                       <h4 className={`output ${getOutputClass()}`}><strong>  Your addition Result (from ReactJS) is:  {reactSum}</strong></h4>
                    </Col>
                </Row>

            </Container>
        </div>
    </>
    );
};

export default MyBlog;