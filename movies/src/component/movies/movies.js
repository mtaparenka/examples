import React, { useEffect, useState } from 'react';
import MovieCard from './movieCard/movieCard';
import { SortBar } from './sortBar/sortBar';
import "./Movies.css";
import Heading from '../heading/heading';
import MovieEditor from '../modal/MovieEditor';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../logo/logo';
import MovieDetails from '../heading/details/movieDetails';
import { FETCH_MOVIES } from '../../store/slice/moviesSlice';

export default function Movies() {
    const dispatch = useDispatch()

    const isOpenEditor = useSelector((state) => state.editor.isOpen)
    const isOpenDelete = useSelector((state) => state.delete.isOpen)
    const isOpenDetails = useSelector((state) => state.details.isOpen)
    const status = useSelector((state) => state.movies.status)
    const movies = useSelector((state) => state.movies.data)

    dispatch(FETCH_MOVIES())

    return (
        <>
            {isOpenDetails ? <MovieDetails /> : <Heading />}
            <div className="movies" >
                <div className="container">
                    <div className="movies-row">
                        <SortBar />
                        {status === "loaded" ?
                            <div className="cards">
                                <div className="movies-finded">
                                    <span>{movies.length} <span className="movies-found">movies found</span></span>
                                </div>
                                <div className="cards-row">
                                    {movies?.map((movie, index) => (
                                        <MovieCard key={index}
                                            data={movie}
                                        />
                                    ))}
                                </div>
                            </div> : <></>
                        }
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-row">
                        <Logo />
                    </div>
                </div>
            </footer>
            {isOpenEditor ? <MovieEditor /> : <></>}
            {isOpenDelete ? <DeleteConfirmation /> : <></>}
        </>
    )
}
