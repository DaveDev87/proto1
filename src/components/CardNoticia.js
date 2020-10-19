import React from "react";
import { Link } from "react-router-dom";

export default function CardNoticia(props) {
  const preview = (element) => {
    let resultado = "";
    let text = element.split(" ");
    for (let index = 0; index < 50; index++) {
      resultado += text[index] + " ";
    }

    return resultado + "...";
  };
  return (
    <div className="card" style={{ width: "50rem", margin: "15px" }}>
      <div className="card-body">
        <h5 className="card-title">{props.props.titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.props.autor}</h6>
        <p className="card-text">{preview(props.props.contenido)}</p>
        <Link to={`/Noticia/${props.props.noticia}`}>
          <p>Seguir leyendo</p>
        </Link>
      </div>
    </div>
  );
}
