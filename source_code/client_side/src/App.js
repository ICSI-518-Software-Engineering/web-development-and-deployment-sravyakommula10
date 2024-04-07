import "./App.css";
import React from 'react';
import MyBlog from './components/MyBlog/MyBlog';
import Jokes from './components/Jokes/Jokes';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import mylogo from './Images/mylogo.jpeg';
import InventoryManagement from "./components/InventoryManagement/InventoryManagement";
import AuthPage from "./components/pages/AuthPage";
import SignIn from "./components/Authentication/SignIn";

function App() {
  return (
    <Router>
      <Navbar variant="light" className="navBar">

        <Navbar.Brand href="/" className="custom-nav">
          <img
            alt="Media Library"
            src={mylogo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <p>Sravya</p>
        </Navbar.Brand>

        <Navbar.Collapse >
          <Nav className="mr-auto customLink">
            <Nav.Link as={Link} to="/myblog">My Blog</Nav.Link>
            <Nav.Link as={Link} to="/jokes">Jokes</Nav.Link>
            <Nav.Link as={Link} to="/inventory">InventoryManagement</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/myblog" element={<MyBlog />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;