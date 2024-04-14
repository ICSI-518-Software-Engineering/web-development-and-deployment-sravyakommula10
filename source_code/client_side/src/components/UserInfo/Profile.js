import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const Profile = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const name = userInfo?.name;
    const email = userInfo?.email;
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('userInfo');
        navigate('/');
    }

    return (
        <Container className="d-flex justify-content-center" style={{ marginTop: '50px' }}>
            <Card style={{ width: '50rem', height: '30rem' }}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-center" style={{ fontSize: '2rem' }}>Logged-in User Information</Card.Title>
                    <Card.Text className="d-flex flex-column align-items-center" style={{ fontSize: '1.5rem' }}>
                        <p >Name: {name}</p>
                        <p >Email: {email}</p>
                    </Card.Text>
                    <Button variant="danger" onClick={logout} style={{ fontSize: '1.25rem', padding: '10px 20px' }}>Logout</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;