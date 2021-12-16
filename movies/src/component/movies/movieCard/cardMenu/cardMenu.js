import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Delete } from './delete/delete';
import './CardMenu.css';
import Edit from './edit/edit';

export default function CardMenu(props) {
    const ref = useRef(null)

    const handleClickOutside = (e) => {
        if (ref && !ref.current.contains(e.target)) {
            props.openMenuCallback(false)
        }
    }

    useEffect(() => {
        ref.current.focus()
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div className="card-menu" ref={ref}>
            <Edit data={props.data} />
            <Delete data={props.data} />
        </div>
    )
}

CardMenu.propTypes = {
    data: PropTypes.object.isRequired,
    openMenuCallback: PropTypes.func.isRequired
}
