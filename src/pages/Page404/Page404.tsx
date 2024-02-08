import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import error404 from '../../shared/assets/error404.png'

function Page404() {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40px',
            }}
        >
            <Box
                style={{
                    backgroundImage: `url(${error404})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '200px',
                    width: '50%',
                }}
            />
            <Typography variant="h4" gutterBottom>
                Ничего не найдено, попробуй снова
            </Typography>
            <Link to="/">
                <Button variant="contained" color="success">
                    Продолжить
                </Button>
            </Link>
        </Box>
    )
}

export default Page404
