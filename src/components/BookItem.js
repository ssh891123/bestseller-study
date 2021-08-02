import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./BookItem.css";

function BookItem({id, title, image, author, price, discount, publisher, pubdate, description}) 
{ 
    return (
        <div className="book">
            <a href={id} target = "_blank">
                <img src={image} alt={title} title={title}></img>
                <div className="book__data">
                    <h3 className="book__title">{
                        title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
                    }</h3>
                    <p className="book__author">
                        <span>저자</span> {author}
                    </p>
                    <p className="book__publisher">
                        <span>출판사</span> {publisher}
                    </p>
                    <p className="book__pubdate">
                        <span>출판일</span> {pubdate}
                    </p>
                    <p className="book__price">
                        <span>가격</span> {price}
                    </p>
                    <p className="book__description">
                        <span>{description.replace(/<b>/gi,"").replace(/<\/b>/gi,"").slice(0,200)}</span> 
                    </p>
                </div>
            </a>
        </div>
    )
}; 

BookItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    pubdate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default BookItem;
