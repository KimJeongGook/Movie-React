import React from "react";
import './Home.css'

function Home({movies}){
    return(
        <>
        {movies.map( (movie, id) => {
            return(
                <div key={movie.id} className="home-style">
                    <img src={movie.medium_cover_image} alt={movie.title}></img>
                    <h3>{movie.title}</h3>
                    <h4>{movie.genres.join("")}</h4>
                    {/* <p>{movie.summary}</p> */}
                </div>
                )
            })}
        </>
    )
}
export default Home;
