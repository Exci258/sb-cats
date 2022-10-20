import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddCatPage from './pages/AddCatPage';
import DeleteCatPage from './pages/DeleteCatPage';
import EditCatPage from './pages/EditCatPage';
import HomePage from './pages/HomePage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/add'} element={<AddCatPage />} />
            <Route path={'/edit'} element={<EditCatPage />} />
            <Route path={'/delete'} element={<DeleteCatPage />} />
            <Route path='*' element={<Navigate to={'/'} replace />} />
        </Routes>
    );
};

export default AppRouter;
