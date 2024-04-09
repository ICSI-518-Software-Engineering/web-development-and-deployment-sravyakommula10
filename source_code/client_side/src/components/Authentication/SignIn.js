import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5001';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle sign in logic here
        console.log('Sign In form submitted');
        const email = e.target[0].value;
        const password = e.target[1].value;
        if(!email || !password){
            alert("Please fill all the fields");
            return;
        }
        try{
            const config = {
              headers: {
                'Content-type': 'application/json',
              },
            };
            const {data} = await axios.post('/users/login', {email, password}, config);
            console.log(data);  
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/home');          
        }
        catch(error){
            console.error(error);
            alert("Invalid Email or Password");

        }
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