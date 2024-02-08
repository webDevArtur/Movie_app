import React, { useEffect } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Box,
} from '@mui/material'
import { observer } from 'mobx-react-lite'
import store from '../../store/store'
import favoriteMoviesStore from '../../store/favoriteMoviesStore'

interface Movie {
    imdbID: string
    Title: string
    Year: string
    Poster: string
}

const HomePage: React.FC = () => {
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            store.fetchMovies()
        }
    }

    useEffect(() => {
        store.fetchMovies()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const addToFavorites = (movie: Movie) => {
        favoriteMoviesStore.addToFavorites(movie)
    }

    const removeFromFavorites = (movieId: string) => {
        favoriteMoviesStore.removeFromFavorites(movieId)
    }

    return (
        <Container maxWidth="lg" style={{ marginTop: '40px' }}>
            <Grid container spacing={3}>
                {store.movies.map((movie: Movie) => (
                    <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                        <Card style={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                image={movie.Poster}
                                alt={movie.Title}
                                style={{ height: '600px' }}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {movie.Title}
                                </Typography>
                                <Typography variant="body2">
                                    {movie.Year}
                                </Typography>
                                <Box sx={{ width: '100%', textAlign: 'right' }}>
                                    {favoriteMoviesStore.favoriteMovies.some(
                                        (favoriteMovie) =>
                                            favoriteMovie.imdbID ===
                                            movie.imdbID
                                    ) ? (
                                        <IconButton
                                            onClick={() =>
                                                removeFromFavorites(
                                                    movie.imdbID
                                                )
                                            }
                                        >
                                            ❤️
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            onClick={() =>
                                                addToFavorites(movie)
                                            }
                                        >
                                            🖤
                                        </IconButton>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default observer(HomePage)
