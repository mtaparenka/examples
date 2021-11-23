import React from 'react';
import "./../style.css";


export default function SearchBar() {
    return (
        <div className="search-container">
            <h3>FIND YOUR MOVIE</h3>
            <input className="search styled" type="text" placeholder="What do you want to search?"></input>
            <button className="styled" type="submit">SEARCH</button>
        </div>
    )
}
