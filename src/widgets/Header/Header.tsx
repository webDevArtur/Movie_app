import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import { Link } from 'react-router-dom'
import header_logo from '../../shared/assets/header_logo.png'

const Header = (): JSX.Element => {
    const menuList: { label: string; path: string }[] = [
        { label: 'Главная', path: '/' },
        { label: 'О нас', path: '/AboutPage' },
        { label: 'Сохраненные фильмы', path: '/SavedMoviesPage' },
    ]

    return (
        <AppBar
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                minWidth: '100%',
            }}
            position="static"
        >
            <Box>
                <Link to="/">
                    <img
                        src={header_logo}
                        alt="header_logo"
                        style={{ width: '150px' }}
                    />
                </Link>
            </Box>

            <Box
                style={{
                    display: 'grid',
                    gap: '10px',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    alignItems: 'center',
                    ...(window.innerWidth < 490 && {
                        gridTemplateColumns: '1fr',
                    }),
                }}
            >
                {menuList.map((el) => (
                    <Link
                        key={el.label}
                        to={el.path}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            style={{
                                color: '#fff',
                                fontSize: '16px',
                                width: '100%',
                            }}
                            variant="text"
                        >
                            {el.label}
                        </Button>
                    </Link>
                ))}
            </Box>
        </AppBar>
    )
}

export default Header
