import React from 'react';
import MovieCard from './movieCard/movieCard';
import { SortBar } from './sortBar/sortBar';
import "./Movies.css";
import Heading from '../heading/heading';
import MovieEditor from '../modal/MovieEditor';
import DeleteConfirmation from '../modal/DeleteConfirmation';
import { useSelector } from 'react-redux';
import Logo from '../logo/logo';
import MovieDetails from '../heading/details/movieDetails';

export default function Movies() {
    const isOpenEditor = useSelector((state) => state.editor.isOpen)
    const isOpenDelete = useSelector((state) => state.delete.isOpen)
    const isOpenDetails = useSelector((state) => state.details.isOpen)

    const movies = useSelector((state) => state.movies.data)

    return (
        <>
            {isOpenDetails ? <MovieDetails /> : <Heading />}
            <div className="movies" >
                <div className="container">
                    <div className="movies-row">
                        <SortBar />
                        <div className="cards">
                            <div className="movies-finded">
                                <span>{movies.length} <span className="movies-found">movies found</span></span>
                            </div>
                            <div className="cards-row">
                                {movies.map((movie, index) => (
                                    <MovieCard key={index}
                                        data={movie}
                                    />
                                ))}
                            </div>
                        </div>
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
