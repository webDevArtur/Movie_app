import { Outlet, Route, Routes } from 'react-router-dom'
import ColumnLayout from '../shared/layouts/ColumnLayout'
import HomePage from '../pages/HomePage/HomePage'
import Page404 from '../pages/Page404/Page404'
import AboutPage from '../pages/AboutPage/AboutPage'
import SavedMoviesPage from '../pages/SavedMoviesPage/SavedMoviesPage'

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ColumnLayout>
                        <Outlet />
                    </ColumnLayout>
                }
            >
                <Route index element={<HomePage />} />
                <Route path="AboutPage" element={<AboutPage />} />
                <Route path="SavedMoviesPage" element={<SavedMoviesPage />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
