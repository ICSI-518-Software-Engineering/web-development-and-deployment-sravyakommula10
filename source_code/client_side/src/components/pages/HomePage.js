import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import mylogo from '../../Images/mylogo.jpeg';
import MyBlog from '../MyBlog/MyBlog';
import Jokes from '../Jokes/Jokes';
import InventoryManagement from '../InventoryManagement/InventoryManagement';
import Profile from '../UserInfo/Profile';


const HomePage = () => {
  return (
    <>
        <Navbar variant="light" className="navBar">

        <Navbar.Brand as={Link} to="myblog" className="custom-nav">
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
            <Nav.Link as={Link} to="myblog">My Blog</Nav.Link>
            <Nav.Link as={Link} to="jokes">Jokes</Nav.Link>
            <Nav.Link as={Link} to="inventory">Inventory Management</Nav.Link>
            <Nav.Link as={Link} to="profile">User Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

        <Routes>
            <Route path="myblog" element={<MyBlog />} />
            <Route path="jokes" element={<Jokes />} />
            <Route path="inventory" element={<InventoryManagement />} />
            <Route path="profile" element={<Profile />} />
            <Route index element={<MyBlog />} />
        </Routes>
        </>
  )
}

export default HomePage;