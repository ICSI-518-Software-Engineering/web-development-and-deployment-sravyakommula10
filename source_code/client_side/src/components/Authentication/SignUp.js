import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getService } from '../../API/api';

const baseURL = 'http://localhost:3000';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle sign up logic here
        console.log('Sign Up form submitted');
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;
        if(!name || !email || !password || !confirmPassword){
            alert("Please fill all the fields");
            return;
        }
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        const payload = {
            method: "POST",
            url: `${baseURL}/users/register`,
            data: {name, email, password}
        };

        try{
            const response = await getService(payload);
            const data = response.data;
            console.log(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate('/home');
        } 
        catch (error) {
            console.log(error);
            alert(error.response.data);
        }
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