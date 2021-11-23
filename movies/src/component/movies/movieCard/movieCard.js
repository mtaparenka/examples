import React from 'react';
import PropTypes from 'prop-types';
import "./MovieCard.css";
import CardMenu from './cardMenu/cardMenu';

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openContextMenu: false
        }

        this.handleOnContextMenu = this.handleOnContextMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);
    }

    render() {
        return (
            <a className="card" onContextMenu={(e) => this.handleOnContextMenu(e, true)} >
                {this.state.openContextMenu ? <CardMenu
                    clickOutside={this.openMenu}
                    data={this.props.data}
                    showEditorCallback={this.props.showEditorCallback}
                    deleteCallbackHandler={this.props.deleteCallbackHandler} /> : <></>}
                <img src={this.props.data.img}></img>
                <h1>{this.props.data.name}</h1>
                <span>{this.props.data.genre}</span>
                <span className="text-right">{this.props.data.year}</span>
            </a>
        )
    }

    handleOnContextMenu(e, isOpen) {
        e.preventDefault();
        this.openMenu(isOpen)
    }

    openMenu(isOpen) {
        this.setState({ openContextMenu: isOpen })
    }
}



MovieCard.propTypes = {
    data: PropTypes.object.isRequired,
    showEditorCallback: PropTypes.func.isRequired,
    deleteCallbackHandler: PropTypes.func.isRequired
}
