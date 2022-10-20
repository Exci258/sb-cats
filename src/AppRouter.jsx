import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddCatPage from './pages/AddCatPage';
import DeleteCatPage from './pages/DeleteCatPage';
import EditCatPage from './pages/EditCatPage';
import HomePage from './pages/HomePage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/sb-cats/'} element={<HomePage />} />
            <Route path={'/sb-cats/add'} element={<AddCatPage />} />
            <Route path={'/sb-cats/edit'} element={<EditCatPage />} />
            <Route path={'/sb-cats/delete'} element={<DeleteCatPage />} />
            <Route path='*' element={<Navigate to={'/sb-cats/'} replace />} />
        </Routes>
    );
};

export default AppRouter;
