import Bitmap from './../../public/Bitmap.png'

const movies = [
    {
        name: "Family film",
        description: "Kind description",
        img: Bitmap,
        genre: [
            "Comedy"
        ],
        year: "2015-01-23",
    },
    {
        name: "Sad film",
        description: "Sad description",
        img: Bitmap,
        genre: [
            "Drama"
        ],
        year: "2011-01-23"
    },
    {
        name: "Action film",
        description: "Action description",
        img: Bitmap,
        genre: [
            "Action"
        ],
        year: "2000-01-23"
    },
    {
        name: "Biography film",
        description: "Biography description",
        img: Bitmap,
        genre: [
            "Biography"
        ],
        year: "2018-01-23"
    },
    {
        name: "Another Biography film",
        description: "Biography description",
        img: Bitmap,
        genre: [
            "Biography"
        ],
        year: "1995-01-23"
    }
]


export function getMovies() {
    return movies
}

export function editMovie(name, movie) {
    var movieIndex = movies.findIndex((n) => n.name === name)
    movies[movieIndex] = movie
}

export function addMovie(movie) {
    movies.push(movie)
}

export function deleteMovie(name) {
    var movieIndex = movies.findIndex((n) => n.name === name)

    movies.splice(movieIndex, 1)
}

export function sortBy(name) {
    if (name === "date") {
        return movies.sort((d1, d2) => new Date(d1.year) - new Date(d2.year))
    }

    return getMovies()
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
