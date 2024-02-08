import { makeAutoObservable } from 'mobx'

interface Movie {
    imdbID: string
    Title: string
    Year: string
    Poster: string
}

class FavoriteMoviesStore {
    favoriteMovies: Movie[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addToFavorites(movie: Movie) {
        if (
            !this.favoriteMovies.some(
                (favoriteMovie) => favoriteMovie.imdbID === movie.imdbID
            )
        ) {
            this.favoriteMovies.push(movie)
        }
    }

    removeFromFavorites(movieId: string) {
        this.favoriteMovies = this.favoriteMovies.filter(
            (movie) => movie.imdbID !== movieId
        )
    }
}

const favoriteMoviesStore = new FavoriteMoviesStore()
export default favoriteMoviesStore
