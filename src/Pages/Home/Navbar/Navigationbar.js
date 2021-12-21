import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigationbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Specialist Doctor's Chamber</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink className="m-2" to="/home">
              <Button variant="primary">Home</Button>
            </NavLink>
            <NavLink className="m-2" to="/home">
              <Button variant="primary">Our Services</Button>
            </NavLink>
            <NavLink className="m-2" to="/register">
              <Button variant="primary">Register</Button>
            </NavLink>
            {user.email ? (
              <Button onClick={logOut} variant="primary">
                Log Out
              </Button>
            ) : (
              <NavLink className="m-2" to="/login">
                <Button variant="primary">Login</Button>
              </NavLink>
            )}
            <Navbar.Text>
              User's-Name: <a href="login">{user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
