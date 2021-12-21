import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/n8HQz7c/doctors-14.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Container className="w-50">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div>
          <p>-------------------------------------</p>
        </div>
        <h3>Already Register ? Log In Now !</h3>
        <Link to="/login">
          <Button variant="warning"> Go to Log in</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Register;
