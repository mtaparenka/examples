import React from 'react';
import PropTypes from 'prop-types';
import { Delete } from './delete/delete';
import './CardMenu.css';
import Edit from './edit/edit';
import { deleteMovie } from '../../../../client/apiClient';

export default class CardMenu extends React.Component {
    constructor(props) {
        super(props)

        this.refWrapper = React.createRef()
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        return (
            <div className="card-menu" ref={this.refWrapper}>
                <Edit
                    showEditorCallback={() => this.props.showEditorCallback(true, true, "edit movie", this.props.data)}
                    data={this.props.data} />
                <Delete 
                    deleteCallbackHandler={() => this.props.deleteCallbackHandler(true, this.props.data.name)}
                />
            </div>
        )
    }

    handleClickOutside(e) {
        if (this.refWrapper && !this.refWrapper.current.contains(e.target)) {
            this.props.clickOutside(false)
        }
    }
}

CardMenu.propTypes = {
    clickOutside: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    showEditorCallback: PropTypes.func.isRequired,
    deleteCallbackHandler: PropTypes.func.isRequired
}
