import React from 'react';
import { getPopularGenres } from '../../../client/apiClient';
import "./../style.css";

export function SortBar() {
    var genres = getPopularGenres()

    return (
        <div className="sort-container">
            <ul className="genres">
                {genres.map((genre,index) => (
                    <li key={index}>
                        <span>{genre}</span>
                    </li>
                ))}
            </ul>
            <div className="sort-content">
                <span>SORT BY</span>
                <a href="#">RELEASE DATE</a>
                <a href="#">RATING</a>
            </div>
        </div>
    )
}
