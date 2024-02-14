import React, { useState } from "react";

import profile from '../../Images/profile.png';
import { Navbar, Form, Container, Row, Col } from "react-bootstrap";
import logo from '../../Images/logo.jpeg';

const MyBlog = () => {
    const [user, setUser] = useState("Sravya");
    const [description, setDescription] = useState(
        "Hello! I'm Sravya Kommula, currently pursuing MS in Computer Science at SUNY ALBANY. My dream is to work for MICROSOFT and utilize my expertise to develop complex projects efficiently and with quality. I aim to enhance my knowledge in Computer Science to benefit future generations and contribute to making the world a better place to live."
    );


    return (
        <>
            <Navbar variant="light" className="navBar">
                <Navbar.Brand href="#home" className="custom-nav">
                    <img
                        alt="Media Library"
                        src={logo}
                        width="60"
                        height="60"
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
                            <img className="profile" src={profile} alt="Sravya" />
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
                            Hello {user} !!! Please provide your inputs to add 2 numbers
                        </h4>
                    </Row>
                   
                </Container>
            </div>
        </>
    );
};

export default MyBlog;
