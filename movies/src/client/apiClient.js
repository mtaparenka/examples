import { v4 } from 'uuid'
import Bitmap from './../../public/Bitmap.png'

/* const movies = [
    {
        id: 1,
        name: "Family film",
        description: "Kind description",
        img: Bitmap,
        genre: [
            "Comedy",
            "Action"
        ],
        date: "2015-01-23",
        runtime: "2h 16m",
        rating: 8.2,
        description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
    },
    {
        id: 2,
        name: "Sad film",
        description: "Sad description",
        img: Bitmap,
        genre: [
            "Drama"
        ],
        date: "2011-01-23",
        runtime: "2h 6m",
        rating: 8.2,
        description: "cool film"
    },
    {
        id: 3,
        name: "Action film",
        description: "Action description",
        img: Bitmap,
        genre: [
            "Action"
        ],
        date: "2000-01-23",
        runtime: "1h 16m",
        rating: 7.2,
        description: "cool film"
    },
    {
        id: 4,
        name: "Biography film",
        description: "Biography description",
        img: Bitmap,
        genre: [
            "Biography"
        ],
        date: "2018-01-23",
        runtime: "2h 26m",
        rating: 8.1,
        description: "cool film"
    },
    {
        id: 5,
        name: "Another Biography film",
        description: "Biography description",
        img: Bitmap,
        genre: [
            "Biography"
        ],
        date: "1995-01-23",
        runtime: "1h 46m",
        rating: 9.2,
        description: "cool film"
    }
] */


export async function getMovies() {
    const response = await fetch("http://localhost:4000/movies")
    const json = await response.json()

    return json
}

export function editMovie(id, movie) {
    /* var movieIndex = movies.findIndex((n) => n.id === id)
    movies[movieIndex] = movie */
}

export function addMovie(movie) {
    /* movie.id = v4()
    movies.push(movie) */
}

export function deleteMovie(id) {
    /* var movieIndex = movies.findIndex((n) => n.id === id)

    movies.splice(movieIndex, 1) */
}

export function sortBy(sort) {
    /* let copy = [...movies]
    let sorted = copy.sort((d1, d2) => ("" + d1[sort.name]).localeCompare(d2[sort.name]))

    return sort.direction === "asc" ? sorted : sorted.reverse() */
}


export function getPopularGenres() {
    return [
        "ALL",
        "DOCUMENTARY",
        "COMEDY",
        "HORROR",
        "CRIME"
    ]
}

export function getGenres() {
    return [
        "DOCUMENTARY",
        "COMEDY",
        "HORROR",
        "CRIME",
        "ACTION",
        "HORROR"
    ]
}

export function getSorts() {
    return [
        "RELEASE DATE",
        "RATING"
    ]
}
