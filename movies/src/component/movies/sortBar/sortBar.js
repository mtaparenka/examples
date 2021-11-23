import React from 'react';
import { getPopularGenres } from '../../../client/apiClient';
import PropTypes from 'prop-types';
import "./../Movies.css";

export function SortBar(props) {
    var genres = getPopularGenres()

    return (
        <div className="sort-container">
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index}>
                        <span>{genre}</span>
                    </li>
                ))}
            </ul>
            <div className="sort">
                <span>SORT BY</span>
                <div className="sort-content">
                    <a href="#" onClick={() => props.sortCallback("date")}>RELEASE DATE</a>
                </div>
            </div>
        </div>
    )
}

SortBar.propTypes = {
    sortCallback: PropTypes.func.isRequired
}
