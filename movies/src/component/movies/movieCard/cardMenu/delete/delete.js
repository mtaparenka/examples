import React from 'react';
import PropTypes from 'prop-types';


export function Delete(props) {
    return (
        <button onClick={() =>props.deleteCallbackHandler()}>Delete</button>
    )
}

Delete.propTypes = {
    deleteCallbackHandler: PropTypes.func.isRequired
}