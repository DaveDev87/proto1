import React from "react";

export default function CardNoticia(props) {
  return (
    <div className="card" style={{ width: "50rem", margin: "15px" }}>
      <div className="card-body">
        <h5 className="card-title">{props.props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.props.author}</h6>
        <p className="card-text">{props.props.body}</p>
        <p>Seguir leyendo</p>
      </div>
    </div>
  );
}
