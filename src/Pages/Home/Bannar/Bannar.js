import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Bannar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/Lpkh7Nh/banner-bg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Container>
        <div className="me-auto">
          <div className="text-white">
            <h1>Search Doctors & Make an appointment</h1>
            <h4>
              Discover The Best Doctors, Clinic, And Hospital The City Nearest
              You
            </h4>
          </div>
          <div>
            <Container>
              <Form onSubmit={handleSubmit} className="w-85">
                <Row>
                  <Col>
                    <Form.Control placeholder="Search Location" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Search Doctors" />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit" className="mb-2">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bannar;
