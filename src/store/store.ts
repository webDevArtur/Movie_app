import { makeAutoObservable } from 'mobx'
import axios from 'axios'

interface Movie {
    imdbID: string
    Title: string
    Year: string
    Poster: string
}

class MovieStore {
    movies: Movie[] = []

    page: number = 1

    constructor() {
        makeAutoObservable(this)
    }

    async fetchMovies() {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?s=star wars&apikey=5072c76d&page=${this.page}`
            )
            const newMovies = response.data.Search
            this.movies = this.movies.concat(newMovies)
            this.page += 1
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
}

const movieStore = new MovieStore()
export default movieStore
