import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import Header from '../../widgets/Header/Header'

const ColumnLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                minWidth: '100%',
            }}
        >
            <Header />
            {children}
        </Box>
    )
}

export default ColumnLayout
