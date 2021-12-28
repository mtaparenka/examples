import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./MovieCard.css";
import CardMenu from './cardMenu/cardMenu';
import { useDispatch } from 'react-redux';
import { SET_IS_OPEN, SET_SELECTED_MOVIE } from '../../../store/slice/detailsSlice';

export default function MovieCard(props) {
    const [openContextMenu, setOpenContextMenu] = useState(false)
    const dispatch = useDispatch()

    const openDetails = () => {
        dispatch(SET_SELECTED_MOVIE(props.data))
        dispatch(SET_IS_OPEN(true))
    }

    const handleOnContextMenu = (e, isOpen) => {
        e.preventDefault();
        setOpenContextMenu(isOpen)
    }

    console.log(props.data)

    return (
        <div className="card"
            onContextMenu={(e) => handleOnContextMenu(e, true)}
            onClick={openDetails}>
            <img className="card-image" src={props.data.img}></img>
            <div className="card-details">
                <div className="card-primary-info">
                    <div className="card-name">{props.data.name}</div>
                    <div className="card-date-container">
                        <div className="card-date">{new Date(props.data.date).getFullYear()}</div>
                    </div>
                </div>
                <div className="card-secondary-info">
                    <div className="card-genres">{props.data.genre}</div>
                </div>
            </div>
            {openContextMenu
                ? <CardMenu
                    data={props.data}
                    openMenuCallback={setOpenContextMenu} />
                : <></>}
        </div>
    )
}

MovieCard.propTypes = {
    data: PropTypes.object.isRequired,
}
