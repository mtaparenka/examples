import React, { useState } from 'react';
import './Modal.css'
import './../movies/Movies.css'
import { addMovie, editMovie, getMovies } from '../../client/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_EDITOR } from '../../store/slice/editorSlice';
import { SET_DATA } from '../../store/slice/moviesSlice';

export default function MovieEditor() {
    const editorState = useSelector((state) => state.editor)
    const [data, setData] = useState(editorState.data)
    const isEdit = useSelector((state) => state.editor.isEdit)
    const dispatch = useDispatch()

    const onChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        let newData = Object.assign({}, data)
        newData[[name]] = value
        setData(newData)
    }

    const closeEditor = () => {
        dispatch(OPEN_EDITOR({ isOpen: false }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEdit) {
            editMovie(data.id, data)
        } else {
            addMovie(data)
        }
        dispatch(SET_DATA(getMovies()))
        closeEditor()
    }

    return (
        <div className="modal" onClick={closeEditor}>
            <div className="modal-row" onClick={(e) => e.stopPropagation()}>
                <div className="modal-close">
                    <span onClick={closeEditor}>X</span>
                </div>
                <div className="editor-container">
                    <div className="modal-title">{editorState.title}</div>
                    <div className="fields-row">
                        <div className="editor-field wide">
                            <div className="field-title">title</div>
                            <input name="name" placeholder="name" className="field-input" value={data.name}
                                onChange={onChange}
                            ></input>
                        </div>
                        <div className="editor-field">
                            <div className="field-title">release date</div>
                            <input name="date" type="date" className="field-input" value={data.date}
                                onChange={onChange}
                            ></input>
                        </div>
                        <div className="editor-field wide">
                            <div className="field-title">movie url</div>
                            <input name="url" placeholder="https://" className="field-input"></input>
                        </div>
                        <div className="editor-field">
                            <div className="field-title">rating</div>
                            <input name="rating" placeholder="7.8" className="field-input" value={data.rating}
                                onChange={onChange}
                            ></input>
                        </div>
                        <div className="editor-field wide">
                            <div className="field-title">genre</div>
                            <input name="genre" className="field-input" value={data.genre.join(', ')} readOnly
                                onChange={onChange} 
                            ></input>
                        </div>
                        <div className="editor-field">
                            <div className="field-title">runtime</div>
                            <input name="runtime" placeholder="minutes" className="field-input" value={data.runtime}
                                onChange={onChange}
                            ></input>
                        </div>
                        <div className="editor-field full-width">
                            <div className="field-title">overview</div>
                            <textarea name="description" placeholder="Movie description" className="field-input" value={data.description}
                                onChange={onChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="editor-buttons">
                        <button className="reset" onClick={() => setData(editorState.data)}>reset</button>
                        <button className="submit" onClick={handleSubmit}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
