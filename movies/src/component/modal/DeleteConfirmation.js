import React from 'react';
import './Modal.css';
import './../movies/Movies.css';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_MOVIE } from '../../store/slice/moviesSlice';
import { SET_IS_OPEN } from '../../store/slice/deleteSlice';

export default function DeleteConfirmation() {
    const dispatch = useDispatch()
    const movieToDelete = useSelector((state) => state.delete.movieToDelete)

    const closeModal = () => dispatch(SET_IS_OPEN(false))

    return (
        <div className="modal" onClick={closeModal}>
            <div className="delete-confirmation" onClick={(e) => e.stopPropagation()} >
                <div className="modal-close">
                    <span onClick={closeModal}>X</span>
                </div>
                <div className="delete-container">
                    <div className="modal-title">delete movie</div>
                    <div className="modal-text">Are you sure you want to delete this movie?</div>
                    <div className="editor-buttons">
                        <button className="submit" onClick={() => {
                            dispatch(DELETE_MOVIE(movieToDelete))
                            closeModal()
                        }}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
