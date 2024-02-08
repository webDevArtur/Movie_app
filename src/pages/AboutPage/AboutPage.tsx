import { Typography, Container, Grid, Box } from '@mui/material'
import {
    YMaps,
    Map,
    Placemark,
    ZoomControl,
    TypeSelector,
} from '@pbe/react-yandex-maps'

function AboutPage() {
    return (
        <Container style={{ marginBottom: '40px' }}>
            <Typography
                variant="h4"
                color="primary"
                style={{ marginTop: '20px' }}
                gutterBottom
            >
                О нас
            </Typography>
            <Typography variant="body1" color="textPrimary" paragraph>
                Наша компания занимается разработкой качественных веб-приложений
                и предоставляет широкий спектр услуг в сфере веб-разработки. Мы
                стремимся к высокому качеству наших продуктов и уделяем внимание
                каждой детали проекта.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [55.839289, 38.195342],
                                zoom: 16,
                            }}
                            style={{ width: '100%', height: '400px' }}
                        >
                            <TypeSelector />
                            <ZoomControl />
                            <Placemark geometry={[55.839289, 38.195342]} />
                        </Map>
                    </YMaps>
                </Grid>
            </Grid>
            <Typography
                variant="h6"
                color="primary"
                style={{ marginTop: '40px' }}
                gutterBottom
            >
                Контактная информация
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant="subtitle1" color="textPrimary">
                            Телефон:
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            +7 (123) 456-7890
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" color="textPrimary">
                            Email:
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            info@example.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <Typography variant="subtitle1" color="textPrimary">
                            Адрес:
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            пгт. Монино, ул. Красовского, д. 17
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle1" color="textPrimary">
                            График работы:
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Пн-Пт: 9:00-18:00
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutPage
