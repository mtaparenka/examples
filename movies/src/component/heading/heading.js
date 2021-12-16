import React from 'react';
import AddMovie from './addMovie';
import "./Heading.css";
import Logo from '../logo/logo';

export default function Heading() {
    return (
        <div className="heading">
            <div className="container">
                <div className="heading-row">
                    <div className="heading-top-row">
                        <Logo />
                        <AddMovie />
                    </div>
                    <div className="search">
                        <div className="search-title">find your movie</div>
                        <div className="search-input-row">
                            <div className="search-input">
                                <input type="text" placeholder="What do you want to search?"></input>
                            </div>
                            <div className="search-button">
                                <button type="submit">SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
