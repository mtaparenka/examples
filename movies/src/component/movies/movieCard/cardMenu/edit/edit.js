import React from 'react';
import PropTypes from 'prop-types';

export default class Edit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button onClick={this.props.showEditorCallback}>Edit</button>
        )
    }
}

Edit.propTypes = {
    showEditorCallback: PropTypes.func.isRequired
}
