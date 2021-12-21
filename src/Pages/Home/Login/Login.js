import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { user, logingWithGoogle, logOut, loginWithUser } = useAuth();

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
    loginWithUser(email, password);
  };

  return (
    <div>
      <h1>Please Log in </h1>

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
          {user.email ? (
            <Button onClick={logOut} variant="primary" type="submit">
              Log Out
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Log in
            </Button>
          )}
        </Form>
        <div>
          <p>------------------------------------</p>
        </div>
        {user.email ? (
          <div></div>
        ) : (
          <Button onClick={logingWithGoogle} variant="warning">
            Google Sign In{" "}
          </Button>
        )}
        <div>
          <p>-------------------------------------</p>
        </div>
        <h3>Not Yet Register ? Register Now !</h3>
        <Link to="/register">
          <Button variant="warning"> Go to register</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Login;
