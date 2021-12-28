import React, { useEffect, useRef, useState } from 'react';
import { getPopularGenres, getSorts, sortBy } from '../../../client/apiClient';
import { useDispatch, useSelector } from 'react-redux';
import "./../Movies.css";
import { SET_DATA } from '../../../store/slice/moviesSlice';

const sortMap = {
    "RELEASE DATE": "date",
    "RATING": "rating"
}

export function SortBar() {
    const [sorts, setSorts] = useState(getSorts())
    const [direction, setDirection] = useState("asc")
    const [selectedSort, setSelectedSort] = useState(sorts[0])
    const [showSorts, setShowSorts] = useState(false)

    const genres = getPopularGenres()
    const dispatch = useDispatch()

    const ref = useRef(null)

    const handleClickOutside = (e) => {
        if (ref && !ref.current.contains(e.target)) {
            setShowSorts(false)
        }
    }

    document.addEventListener('mousedown', handleClickOutside)

    useEffect(() => {
        dispatch(SET_DATA(sortBy({
            name: sortMap[selectedSort],
            direction: direction
        })))

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [selectedSort, direction])

    return (
        <div className="sort">
            <div className="sort-row">
                <div className="sort-data-row">
                    <ul className="genres-list">
                        {genres.map((genre, index) => (
                            <li key={index}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <div className="sort-data">
                        <div className="sort-title">SORT BY</div>
                        <div className="sort-content">
                            <div className="selected-sort" tabIndex="1"
                                onClick={() => setShowSorts(true)}>{selectedSort}</div>
                            <div className={direction === "asc" ? "sort-direction" : "sort-direction rotated"} onClick={() => {
                                direction === "asc" ? setDirection("desc") : setDirection("asc")
                            }} />
                        </div>
                        <div ref={ref} className={showSorts ? "sorts displayed" : "sorts"}>
                            {sorts.map((sort, i) =>
                                <div key={i} className="select-option" value={sort} onClick={(e) => {
                                    setSelectedSort(e.target.innerText)
                                    setShowSorts(false)
                                }}>{sort}</div>
                            )}
                        </div>
                    </div>
                </div>
                <hr className="sort-separator" />
            </div>
        </div>
    )
}
