import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./SearchMovie.css";

function BookItem({id, year, title, poster, rating, director, actor}) { 
    return ( 
    <div className="movie">
        <a href={id} target="_blank">
            <img src={poster} alt={title} titlt={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{
                    title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
                    }</h3> 
                <p className="movie__rating">
                    <span>작가</span> {rating}
                </p>
                <p className="movie__year">
                    <span>출판일</span> {year}
                </p>
                <p className="movie__director">
                    <span>출판사</span> {director}
                </p>
                <p className="movie__actor">
                    <span>책소개</span> {actor.slice(0,220)}
                </p>
            </div>
        </a>
    </div> 
    ) 
}; 

BookItem.propTypes = { 
    id: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired
}; 

export default BookItem;
