import React from 'react'
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
import favoriteMoviesStore from '../../store/favoriteMoviesStore'
import cinema from '../../shared/assets/cinema.png'

const SavedMoviesPage: React.FC = () => {
    return (
        <Container maxWidth="lg" style={{ marginTop: '40px' }}>
            {favoriteMoviesStore.favoriteMovies.length ? (
                <Typography variant="h4" gutterBottom>
                    Понравившиеся фильмы
                </Typography>
            ) : (
                <Box
                    maxWidth="lg"
                    style={{ width: '100%', textAlign: 'center' }}
                >
                    <Typography variant="h4" gutterBottom>
                        Выберите понравившийся фильм
                    </Typography>
                    <img src={cinema} alt="cinema" style={{ width: '40%' }} />
                </Box>
            )}
            <Grid container spacing={3}>
                {favoriteMoviesStore.favoriteMovies.map((movie) => (
                    <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                        <Card style={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="600"
                                image={movie.Poster}
                                alt={movie.Title}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    {movie.Title}
                                </Typography>
                                <Typography variant="body2">
                                    {movie.Year}
                                </Typography>
                                <Box sx={{ width: '100%', textAlign: 'right' }}>
                                    <IconButton
                                        onClick={() =>
                                            favoriteMoviesStore.removeFromFavorites(
                                                movie.imdbID
                                            )
                                        }
                                    >
                                        ❌
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default observer(SavedMoviesPage)
