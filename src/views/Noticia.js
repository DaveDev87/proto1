import React, { useState } from 'react'
import { JumbotronNoticia } from '../components/JumbotronNoticia';
import { news } from "../Payload";



export const Noticia = (props) => {
    
    const [data, setData] = useState(news);
   
    const id= parseInt(props.match.params.id);
    const resultado = data.find( x => x.id === id );
    console.log(resultado);
    
    
    
    

    return (
        <>
            
            <JumbotronNoticia data={resultado} />
            


        </>
    )
}
