import Bitmap from './../../public/Bitmap.png'

export function getMovies() {
    return [
        {
            name: "Family film",
            description: "Kind description",
            img: Bitmap,
            genre: [
                "Comedy"
            ],
            year: "2000",
        },
        {
            name: "Sad film",
            description: "Sad description",
            img: Bitmap,
            genre: [
                "Drama"
            ],
            year: "1995"
        },
        {
            name: "Action film",
            description: "Action description",
            img: Bitmap,
            genre: [
                "Action"
            ],
            year: "2020"
        },
        {
            name: "Biography film",
            description: "Biography description",
            img: Bitmap,
            genre: [
                "Biography"
            ],
            year: "2000"
        },
        {
            name: "Another Biography film",
            description: "Biography description",
            img: Bitmap,
            genre: [
                "Biography"
            ],
            year: "2001"
        }
    ]
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
