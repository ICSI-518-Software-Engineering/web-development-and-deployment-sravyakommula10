import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign in logic here
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Sign In</Button>
        </Form>
    );
}

export default SignIn;