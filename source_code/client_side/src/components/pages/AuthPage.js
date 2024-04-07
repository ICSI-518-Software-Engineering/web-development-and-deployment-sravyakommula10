// AuthenticationPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('signIn');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    }

    return (
        <Container>
            <h1 className="text-center my-5">Authentication Page</h1>
            <Tabs activeKey={activeTab} onSelect={handleTabSelect}>
                <Tab eventKey="signIn" title="Sign In">
                    <Row>
                        <Col md={6}>
                            <SignIn />
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="signUp" title="Sign Up">
                    <Row>
                        <Col md={6}>
                            <SignUp />
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default AuthPage;