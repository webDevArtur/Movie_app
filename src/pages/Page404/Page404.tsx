import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import error404_ from '../../shared/assets/error404_.png'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                style={{
                    backgroundImage: `url(${error404_})`,
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
