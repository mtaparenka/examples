import React from 'react';
import AddMovie from './addMovie';
import SearchBar from './searchBar/searchBar';
import "./style.css";

export default function Heading() {
    return (
        <div className="header-container">
            <AddMovie />
            <SearchBar />
        </div>
    )
}
