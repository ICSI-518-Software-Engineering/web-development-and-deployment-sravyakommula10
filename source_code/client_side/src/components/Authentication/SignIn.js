import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getService } from '../../API/api';

const baseURL = 'http://localhost:3000';


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
        const payload = {
            method: "POST",
            url: `${baseURL}/users/login`,
            data: {email, password}
        };
        try{
            const response = await getService(payload);
            const data = response.data;
            console.log(data);  
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/home');          
        }
        catch(error){
            console.error(error);
            alert(error.response.data);

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