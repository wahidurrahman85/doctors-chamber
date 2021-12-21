import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);
  const { id, name, img, specialist, location, visitinghours } = service;
  const { serviceId } = useParams();
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{specialist}</Card.Title>
          <Card.Text>{location}</Card.Text>
          <Card.Text>{visitinghours}</Card.Text>
          <Link className="mx-3" to={`/service/${id}`}>
            <Button onClick={serviceId} variant="primary">
              View Details
            </Button>
          </Link>
          <Link className="mx-3" to={`/service/${id}`}>
            <Button onClick={serviceId} variant="primary">
              Book Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
