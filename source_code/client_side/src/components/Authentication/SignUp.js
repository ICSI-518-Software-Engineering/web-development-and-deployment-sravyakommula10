// SignUp.js

import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign up logic here
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Sign Up</Button>
        </Form>
    );
}

export default SignUp;