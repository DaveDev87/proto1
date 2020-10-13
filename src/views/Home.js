import React, { useState, useEffect } from "react";
import CardNoticia from "../components/CardNoticia";
import { news } from "../Payload";

export default function Home() {
  const [data, setdata] = useState(news);

  return (
    <>
    {data.map((item, i)=>(
      <CardNoticia key={i} props={item}/>

    ))

    }
    </>
  );
}
