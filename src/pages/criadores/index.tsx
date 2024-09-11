import React from "react";
import Container from "../../components/container";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import "./Criadores.css";
import Card from "../../components/Card";
import ImgMurilo from "/assets/img05.jpg";

const Criadores: React.FC = () => {
  return (
    <Container img="img07.png">
      <Header />
      <Card
        nome="Murilo Ribeiro"
        rm="555109"
        sala="1TDSPZ"
        github="https://github.com/murilors27"
        img={ImgMurilo}
      />
      <Footer />
    </Container>
  );
};

export default Criadores;
