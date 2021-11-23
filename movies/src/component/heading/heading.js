import React from 'react';
import AddMovie from './addMovie';
import SearchBar from './searchBar/searchBar';
import "./style.css";

export default function Heading(props) {
    return (
        <div className="header-container">
            <AddMovie showEditorCallback={props.showEditorCallback} />
            <div className="header-content">
                <SearchBar />
            </div>
        </div>
    )
}
