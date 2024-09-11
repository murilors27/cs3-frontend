import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

type CardProps={
    nome: string,
    rm: string,
    sala: string,
    img: string,
    github: string
}

const Card: React.FC <CardProps> = ({ nome, rm, sala, img, github }) => {
  return (
    <div className="card_container">
      <div className="card">
        <img src={img} alt="criador01" className="img-criador" />

        <p>{nome}</p>

        <p>{rm}</p>

        <p>{sala}</p>

        <Link to={github} target="_blank" className="card__link">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default Card;
