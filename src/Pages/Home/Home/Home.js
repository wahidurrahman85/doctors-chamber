import React from "react";
import { Container } from "react-bootstrap";
import Bannar from "../Bannar/Bannar";
import Services from "../Services/Services";

const Home = () => {
  return (
    <Container fluid className="my-1">
      <Bannar />
      <Services />
    </Container>
  );
};

export default Home;
