import React from "react";

function Movie({movies}) {
    const style = {
        width: '230px',
        height:'500px',
        background: 'white',
        magin:'10px',
        boxShadow:'raba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    return(
        <div style={style}>
            <img src={cover} alt={title}></img>
            <h3>{title}</h3>
            {/* "comedy fiction" */}
            <h4>{genres.join("")}</h4>
            <p>{summary}</p>
        </div>
    )
}

export default Movie;