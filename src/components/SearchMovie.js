// import React from 'react'
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import "./SearchMovie.css";

// function SearchMovie({id, year, title, poster, rating, director, actor}) {
//     return (
//         <div className="movie">
//             <a href={id} target="_blank">
//                 <img src={poster} alt={title} title={title}></img>
//                 <div className="movie__data">
//                     <h3 className="movie__title"> 
//                         {title.replace(/<b>/gi,"").replace(/<\/b>/gi, "")}
//                     </h3>
//                     <p className="movie__rating">
//                         <span>Rating</span> {rating}/10
//                     </p>
//                     <p className="movie__year">
//                         <span>Opening Day</span> {year}
//                     </p>
//                     <p className="movie__director">
//                         <span>Director</span> {director}
//                     </p>
//                     <p className="movie__actor">
//                         <span>Actor</span> {actor}
//                     </p>
//                 </div>
//             </a>
//         </div>
//     )
// };

// SearchMovie.propTypes = {
//     id: PropTypes.string.isRequired,
//     year: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     rating: PropTypes.string.isRequired,
//     director: PropTypes.string.isRequired,
//     actor: PropTypes.string.isRequired
// };

// export default SearchMovie;

import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./SearchMovie.css";

function SearchMovie({id, year, title, poster, rating, director, actor}) { 
    return ( 
    <div className="movie">
        <a href={id} target="_blank">
            <img src={poster} alt={title} titlt={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{
                    title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
                    }</h3> 
                <p className="movie__rating">
                    <span>Rating</span> {rating}/10
                </p>
                <p className="movie__year">
                    <span>Opening Day</span> {year}
                </p>
                <p className="movie__director">
                    <span>Director</span> {director}
                </p>
                <p className="movie__actor">
                    <span>Actor</span> {actor}
                </p>
            </div>
        </a>
    </div> 
    ) 
}; 

SearchMovie.propTypes = { 
    id: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired
}; 

export default SearchMovie;
