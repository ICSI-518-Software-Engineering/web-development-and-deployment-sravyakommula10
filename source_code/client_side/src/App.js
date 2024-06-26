import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AuthPage from "./components/pages/AuthPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      {/* <Navbar variant="light" className="navBar">

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
      </Navbar> */}

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home/*" element={<HomePage />} />
        {/* <Route path="/myblog" element={<MyBlog />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/inventory" element={<InventoryManagement />} /> */}
        
      </Routes>
    </Router>
  );
};

export default App;