import React from "react";
import Container from "../../components/container";
import "./Criadores.css";
import Card from "../../components/Card";
import ImgMurilo from "/assets/img05.jpg";
import ImgThiago from "/assets/img04.jpg";
import ImgIan from "/assets/img06.png";

const Criadores: React.FC = () => {
  return (
    <Container img="img07.png">
      <section className="criadores_main">
        <Card
          nome="Murilo Ribeiro"
          rm="555109"
          sala="1TDSPZ"
          github="https://github.com/murilors27"
          img={ImgMurilo}
        />

        <Card
          nome="Thiago Garcia"
          rm="99404"
          sala="1TDSPY"
          github="https://github.com/thiago-tonato"
          img={ImgThiago}
        />

        <Card
          nome="Ian Madeira"
          rm="555502"
          sala="1TDSPY"
          github="https://github.com/murilors27"
          img={ImgIan}
        />
      </section>
    </Container>
  );
};

export default Criadores;
