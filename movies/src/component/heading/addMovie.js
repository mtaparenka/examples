import React from 'react';
import Bitmap from './../../../public/Bitmap.png'
import "./style.css";

const defaultData = {
    name: "",
    genre: [],
    year: "",
    img: Bitmap
}

export default function AddMovie(props) {
    return (
        <button className="add-movie" onClick={() => props.showEditorCallback(true, false, "add movie", defaultData)}>+ ADD MOVIE</button>
    )
}
