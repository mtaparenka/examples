import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'
import './../movies/Movies.css'
import { addMovie, editMovie } from '../../client/apiClient';

export default class MovieEditor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            isEdit: props.isEdit,
            data: props.data
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    render() {
        return (
            <div className="modal-container" onClick={(e) => this.props.showEditorCallback(false)}>
                <div className="movie-editor" onClick={(e) => e.stopPropagation()}>
                    <span className="modal-title">{this.state.title}</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="editor-fields">
                            <div className="editor-left">
                                <div className="editor-row">
                                    <span>TITLE</span>
                                    <input name="name"
                                        placeholder="name"
                                        value={this.state.data.name}
                                        onChange={this.onChange}></input>
                                </div>

                                <div className="editor-row">
                                    <span>MOVIE URL</span>
                                    <input placeholder="https://"
                                        name="url"
                                        onChange={this.onChange}></input>
                                </div>
                                <div className="editor-row">
                                    <span>GENRE</span>
                                    <input name="genre"
                                        placeholder="genre"
                                        value={this.state.data.genre}
                                        onChange={this.onChange}></input>
                                </div>
                            </div>
                            <div className="editor-right">
                                <div className="editor-row">
                                    <span>RELEASE DATE</span>
                                    <input name="year"
                                        type="date"
                                        value={this.state.data.year}
                                        onChange={this.onChange}></input>
                                </div>
                                <div className="editor-row">
                                    <span>RATING</span>
                                    <input placeholder="10"
                                        name="rating"
                                        onChange={this.onChange}></input>
                                </div>
                                <div className="editor-row">
                                    <span>RUNTIME</span>
                                    <input placeholder="minutes"
                                        name="runtime"
                                        onChange={this.onChange}></input>
                                </div>
                            </div>
                            <div className="editor-overview">
                                <span>Overview</span>
                                <textarea placeholder="Movie description"
                                    name="description"
                                    onChange={this.onChange}></textarea>
                            </div>
                        </div>
                        <div className="modal-button-container">
                            <button className="movies-button reset" type="reset" onClick={this.handleReset}>RESET</button>
                            <button className="movies-button submit" type="submit" >SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    submitMovieCallback(movie) {
        addMovie(movie)
    }

    editMovieCallback(name, movie) {
        editMovie(name, movie)
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let newData = Object.assign({}, this.state.data)

        newData[[name]] = value

        this.setState({
            data: newData
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        this.state.isEdit
            ? this.props.submitCallback(() => this.editMovieCallback(this.props.data.name, this.state.data))
            : this.props.submitCallback(() => this.submitMovieCallback(this.state.data))
        this.props.showEditorCallback(false)
    }

    handleReset() {
        this.setState({
            data: this.props.data
        })
    }
}

MovieEditor.propTypes = {
    title: PropTypes.string.isRequired,
    isEdit: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    showEditorCallback: PropTypes.func.isRequired,
    submitCallback: PropTypes.func.isRequired
}