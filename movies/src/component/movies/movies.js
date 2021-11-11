import React from 'react';
import { getMovies } from '../../client/apiClient';
import MovieCard from './movieCard/movieCard';
import { SortBar } from './sortBar/sortBar';
import "./style.css";

export default function Movies() {
    var movies = getMovies()

    return (
        <div className="movies" >
            <SortBar />
            <div className="card-container">
                {movies.map((movie, index) => (
                    <MovieCard key={index}
                        img={movie.img}
                        name={movie.name}
                        genre={movie.genre}
                        year={movie.year}
                    />
                ))}
            </div>
        </div>
    )
}
