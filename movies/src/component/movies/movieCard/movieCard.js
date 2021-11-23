import React from 'react';
import PropTypes from 'prop-types';
import "./style.css";

export default function MovieCard(props) {
    return (
        <a className="card">
            <img src={props.img}></img>
            <h1>{props.name}</h1>
            <span>{props.genre}</span>
            <span className="text-right">{props.year}</span>
        </a>
    )
}

MovieCard.propTypes = {
    img: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    year: PropTypes.string.isRequired
}
