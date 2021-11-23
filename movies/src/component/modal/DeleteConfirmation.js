import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import './../movies/Movies.css';
import { deleteMovie } from '../../client/apiClient';

export default function DeleteConfirmation(props) {
    return (
        <div className="modal-container" onClick={() => props.deleteCallbackHandler(false)}>
            <div className="delete-confirmation" onClick={(e) => e.stopPropagation()}>
                <div className="top-container">
                    <div className="top-btn"> <button className="close-button" onClick={() => props.deleteCallbackHandler(false)} /></div>
                </div>
                <div className="delete-main">
                    <span className="modal-title">delete movie</span>
                    <span className="modal-text">Are you sure?</span>
                </div>
                <div className="modal-button-container">
                    <button className="movies-button submit" onClick={() => {
                        deleteMovie(props.name)
                        props.deleteCallbackHandler(false)
                    }}>Confirm</button>
                </div>

            </div>
        </div>
    )
}

DeleteConfirmation.propTypes = {
    deleteCallbackHandler: PropTypes.func.isRequired
}