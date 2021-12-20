import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_EDITOR } from '../../store/slice/editorSlice';
import Bitmap from './../../../public/Bitmap.png'
import "./Heading.css";

const defaultData = {
    name: "",
    genre: [],
    date: "",
    img: Bitmap
}

export default function AddMovie(props) {
    const dispatch = useDispatch()

    return (
        <button className="add-movie" onClick={() => dispatch(OPEN_EDITOR({
            isOpen: true,
            isEdit: false,
            title: "add movie",
            data: defaultData
        }))}>+ ADD MOVIE</button>
    )
}
