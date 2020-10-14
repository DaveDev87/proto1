import React from 'react'

export const JumbotronNoticia = (props) => {
   

    return (
        <div className="jumbotron">
                <h1>{props.data.title}</h1>
               
                <blockquote className="blockquote">
                    
                    <footer className="blockquote-footer">{props.data.author} - <cite title="Source Title">{props.data.createdAt}</cite></footer>
                </blockquote>
                 <hr/>
                 <p> 
                    {props.data.body}
                </p>
                <div>
                    
                <img src="https://preview.redd.it/etimc4de4xp51.jpg?auto=webp&s=db7d863ce4d9f2b5ade299d0c6600470aa6a155f" className="img-fluid" alt=""/>
                </div>
                
        </div>
    )
}
