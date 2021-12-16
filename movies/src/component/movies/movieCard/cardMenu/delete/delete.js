import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SET_IS_OPEN, SET_MOVIE_TO_DELETE } from '../../../../../store/slice/deleteSlice';

export function Delete(props) {
    const dispatch = useDispatch()
    const openDeleteConfirmation = () => {
        dispatch(SET_MOVIE_TO_DELETE(props.data.id))
        dispatch(SET_IS_OPEN(true))
    }

    return (
        <button onClick={openDeleteConfirmation}>Delete</button>
    )
}

Delete.propTypes = {
    data: PropTypes.object.isRequired
}
