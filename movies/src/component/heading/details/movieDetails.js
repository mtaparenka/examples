import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_IS_OPEN } from '../../../store/slice/detailsSlice';
import Logo from '../../logo/logo';

export default function MovieDetails() {
    const dispatch = useDispatch()
    const selected = useSelector((state) => state.details.selectedMovie)
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div className="details">
            <div className="container">
                <div ref={ref} className="details-row">
                    <div className="details-top-row">
                        <Logo />
                        <div className="details-search" onClick={() => dispatch(SET_IS_OPEN(false))}>⌕</div>
                    </div>
                    <div className="details-content-row">
                        <img className="card-image" src={selected.img} />
                        <div className="details-column">
                            <div className="details-column_top">
                                <div className="details-top_title">
                                    <div className="details-title">{selected.name}</div>
                                    <div className="details-rating">
                                        <div>{selected.rating}</div>
                                    </div>
                                </div>
                                <div className="details-top_genre">{selected.genre.join(" & ")}</div>
                            </div>
                            <div className="details-column_time">
                                <div>{new Date(selected.date).getFullYear()}</div>
                                <div>{selected.runtime}</div>
                            </div>
                            <div className="details-column_description">
                                {selected.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
