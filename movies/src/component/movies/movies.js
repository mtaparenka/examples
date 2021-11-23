import React from 'react';
import { getMovies, sortBy } from '../../client/apiClient';
import MovieCard from './movieCard/movieCard';
import { SortBar } from './sortBar/sortBar';
import "./Movies.css";
import Heading from '../heading/heading';
import MovieEditor from '../modal/MovieEditor';
import Bitmap from './../../../public/Bitmap.png'
import DeleteConfirmation from '../modal/DeleteConfirmation';

export default class Movies extends React.Component {
    constructor(props) {
        super(props)

        this.showEditor = this.showEditor.bind(this)
        this.deleteCallbackHandler = this.deleteCallbackHandler.bind(this)
        this.sortBy = this.sortBy.bind(this)

        this.state = {
            movies: getMovies(),
            openEditor: false,
            isEdit: false,
            editorTitle: "add movie",
            editorData: {
                name: "",
                genre: [],
                year: "",
                img: Bitmap
            },
            deleteData: {
                showDeleteConfirmation: false
            }
        }
    }

    render() {
        return (
            <>
                <Heading showEditorCallback={this.showEditor} />
                <div className="movies" >
                    <SortBar 
                        sortCallback={this.sortBy}/>
                    <div className="card-container">
                        {this.state.movies.map((movie, index) => (
                            <MovieCard key={index}
                                data={movie}
                                showEditorCallback={this.showEditor}
                                deleteCallbackHandler={this.deleteCallbackHandler}
                            />
                        ))}
                    </div>
                </div>
                {this.state.openEditor
                    ? <MovieEditor
                        title={this.state.editorTitle}
                        isEdit={this.state.isEdit}
                        data={this.state.editorData}
                        showEditorCallback={this.showEditor}
                        submitCallback={this.submitCallbackHandler} />
                    : <></>}
                {this.state.deleteData.showDeleteConfirmation
                    ? <DeleteConfirmation
                        name={this.state.deleteData.name}
                        deleteCallbackHandler={this.deleteCallbackHandler} />
                    : <></>}
            </>
        )
    }

    sortBy(name) {
        this.setState({
            movies: sortBy(name)
        })
    }

    deleteCallbackHandler(isOpen, name) {
        console.log(arguments)
        this.setState({
            deleteData: {
                showDeleteConfirmation: isOpen,
                name: name
            }
        })
    }

    submitCallbackHandler = (callback) => {
        callback()
    }

    showEditor(openEditor, isEdit, title, data) {
        this.setState({
            openEditor: openEditor,
            isEdit: isEdit
        })

        if (title != null) {
            this.setState({
                editorTitle: title
            })
        }

        if (data != null) {
            this.setState({
                editorData: data
            })
        }
    }
}
