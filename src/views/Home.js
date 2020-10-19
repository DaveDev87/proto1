import React, { useState, useEffect } from "react";
import axios from "axios";
import CardNoticia from "../components/CardNoticia";

export default function Home() {
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(true);
  
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = () => {
    axios
      .get(
        "https://5hg8ux24j8.execute-api.us-east-2.amazonaws.com/default/periodico"
      )
      .then((res) => {
        const datos = res.data.Items;
        setdata(datos);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <>
        {data.map((item, i) => (
          <CardNoticia key={i} props={item} />
        ))}
      </>
    );
  }
}
