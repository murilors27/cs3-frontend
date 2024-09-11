import React from "react";
import "./OpalaVision.css";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/Footer";

const OpalaVision: React.FC = () => {
  return (
    <Container img="img02.jpg">
      <Header />
      <div>Teste</div>
      <Footer />
    </Container>
  );
};

export default OpalaVision;
