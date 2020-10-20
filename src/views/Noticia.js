import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Noticia() {
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        "https://5hg8ux24j8.execute-api.us-east-2.amazonaws.com/default/periodico"
      )
      .then((res) => {
        const datos = res.data.Items;
        setdata(filterData(id, datos));
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const filterData = (id, datos) => datos.filter((item) => item.noticia === id);

  if (isLoading) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-4">{data[0].titulo}</h1>
          <p className="lead">Autor: {data[0].autor}</p>
          <p className="lead">Fecha: {data[0].fecha}</p>
          <p>{data[0].contenido}</p>
        </div>
      </>
    );
  }
}
