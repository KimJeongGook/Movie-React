import React from "react";
import { useParams, NavLink, useSearchParams, useLocation } from "react-router-dom";
import './Movie.css'

function Movie({movies}){
    console.log(movies)
    const params = useParams();
    let [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive ? {color: 'orangered'} : {})
    
    //URL 쿼리스트링 값을 사용자가 입력한 키워드로 설정함(변경함)
    const changeQueryString = (e) => {
        const filter = e.target.value
        if(filter){
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
    }
    const QueryNavLink = ({to, children, ...props})=>{
        const location = useLocation();
        return <NavLink to={to+location.search} {...props}>{children}</NavLink>
    }
    //필터링된 목록으로 렌더링 하기
    const moviesFiltered = movies
    .filter(movie => {
        const filter = searchParams.get('filter')
        if(!filter) return true;
        const title = movie.title.toLowerCase()
        return title.includes(filter.toLowerCase())
    })
    const movie = moviesFiltered[params.movieId]

    return(
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br/>
            <input className="filter-movie" placeholder="Search Movie..." 
            value={searchParams.get('filter') || ""} onChange={changeQueryString} />

            {movie ?
                <div className="movie-container">
                    <h1>{movie.title}</h1>
                    <img src={movie.medium_cover_image} alt={movie.title}></img>
                    <h3>{movie.title}</h3>
                    <h4>{movie.genres.join("")}</h4>
                    <p>{movie.summary}</p>
                </div> :
                <h2>영화 {params.movieId}</h2>
            }
            
            {moviesFiltered
            .map( (movie, id) => {
                return(
                    <QueryNavLink key={movie.id} to={`/movies/${id}`} className="movie-item"
                    style={applyActiveColor}>
                    {movie.title}</QueryNavLink>
                )
            })}
        </> 
    )
}
export default Movie;