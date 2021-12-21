import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./doctorslist.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="p-4">Our Doctors </h1>
      {
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </Row>
      }
    </Container>
  );
};

export default Services;
