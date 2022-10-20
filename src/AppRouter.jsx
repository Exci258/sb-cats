import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddCatPage from './pages/AddCatPage';
import DeleteCatPage from './pages/DeleteCatPage';
import EditCatPage from './pages/EditCatPage';
import HomePage from './pages/HomePage';
import { getData, deleteData, editData, addData } from './api/api';

const AppRouter = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const cat = await getData();
            setCats(cat);
        };
        getCats();
    }, []);

    const hadleDelete = (id) => {
        const deleteCat = async (id) => {
            const cat = await deleteData(id);
            setCats(cats.filter((cat) => cat.id !== id));
        };
        deleteCat(id);
    };
    const handleEdit = (info) => {
        const editCat = async (info) => {
            const cat = await editData(info);
            setCats(
                cats.map((cat) => {
                    if (cat.id === info.id) {
                        return Object.assign(cat, info);
                    }
                    return cat;
                })
            );
        };
        editCat(info);
    };

    const handleAdd = (info) => {
        const addCat = async () => {
            const cat = await addData(info);
            setCats(cats.concat([info]));
        };
        addCat(info);
    };

    return (
        <Routes>
            <Route path={'/sb-cats/'} element={<HomePage cats={cats} />} />
            <Route
                path={'/sb-cats/add'}
                element={<AddCatPage cats={cats} handleAdd={handleAdd} />}
            />
            <Route
                path={'/sb-cats/edit'}
                element={<EditCatPage cats={cats} handleEdit={handleEdit} />}
            />
            <Route
                path={'/sb-cats/delete'}
                element={
                    <DeleteCatPage cats={cats} hadleDelete={hadleDelete} />
                }
            />
            <Route path='*' element={<Navigate to={'/sb-cats/'} replace />} />
        </Routes>
    );
};

export default AppRouter;
