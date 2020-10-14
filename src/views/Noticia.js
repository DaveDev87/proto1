import React from 'react'
import './Noticia.css';

export const Noticia = (props) => {


    return (
        <>
            <nav className="navbar navbar-dark bg-dark">Periodico</nav>
            <div className="jumbotron">
                <h1>Titulo</h1>
               
                <blockquote class="blockquote">
                    
                    <footer class="blockquote-footer">Juan Carlos Bodoque en <cite title="Source Title">Durango, MX</cite></footer>
                </blockquote>
                 <hr/>
                 <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam enim at elementum malesuada. Nunc efficitur elit diam, et auctor sem pretium id. Donec fermentum tortor eu fringilla semper. Fusce aliquam scelerisque finibus. Sed enim metus, elementum in nulla vitae, commodo tempor lorem. Aliquam molestie odio ligula. Pellentesque pharetra quis mauris ultrices pretium. Curabitur suscipit libero non turpis auctor, ac sagittis orci aliquet. Praesent id molestie orci, ut volutpat urna.
                    Mauris luctus tortor felis. Duis diam lacus, elementum sed consequat at, pulvinar sed est. Quisque turpis turpis, posuere a nisi pellentesque, accumsan congue nunc. Praesent accumsan ac justo id varius. Quisque volutpat, est id mattis molestie, eros eros finibus diam, sed accumsan felis erat vel mi. Ut nec magna id odio tristique porta sed in elit. Aenean pretium tellus vitae libero tempor, quis feugiat lectus consectetur. 
                    
                </p>
                <div>
                    
                <img src="https://preview.redd.it/etimc4de4xp51.jpg?auto=webp&s=db7d863ce4d9f2b5ade299d0c6600470aa6a155f" className="img-fluid" alt=""/>
                </div>
                
            </div>
            
            
            <footer class="page-footer font-small blue pt-4">


            </footer>
            


        </>
    )
}
