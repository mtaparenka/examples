import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { OPEN_EDITOR } from '../../../../../store/slice/editorSlice';

export default function Edit(props) {
    const dispatch = useDispatch()
    const showEditor = () => dispatch(OPEN_EDITOR({
        isOpen: true,
        isEdit: true,
        title: "edit movie",
        data: props.data
    }))

    return (
        <button onClick={showEditor}>Edit</button>
    )
}

Edit.propTypes = {
    data: PropTypes.object.isRequired
}
