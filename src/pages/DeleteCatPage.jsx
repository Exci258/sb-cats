import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const DeleteCatPage = ({ cats, hadleDelete }) => {
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    const catIds = cats
        .filter((cat) => cat.id)
        .map((cat) => {
            return {
                name: cat.name,
                id: cat.id,
                _id: cat._id,
            };
        });

    const onSubmit = (data) => {
        hadleDelete(data.id);
        reset();
        navigate('/sb-cats/');
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-col items-center justify-start pt-4 grow'>
                <h1 className='text-2xl font-bold'>Удалить кота</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-white shadow-lg rounded-2xl px-8 pt-6 pb-6 my-4 w-80'
                >
                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='id'
                    >
                        Выберите кота
                    </label>
                    <select
                        name='id'
                        defaultValue={'Выберите кота'}
                        className='shadow border rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline text-center text-lg font-semibold'
                        {...register('id', {
                            valueAsNumber: true,
                            required: 'Обязательное поле!',
                        })}
                    >
                        <option
                            label='Выберите кота'
                            value='Выберите кота'
                            disabled={true}
                        ></option>
                        {catIds.map((cat) => {
                            return (
                                <option key={cat._id} value={cat.id}>
                                    {cat.name}
                                </option>
                            );
                        })}
                    </select>
                    <button className='bg-red-600 hover:bg-red-600 text-white text-lg font-bold py-2 px-4 border border-red-600 rounded mt-3 w-full hover:scale-105 transform transition duration-200'>
                        Удалить
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default DeleteCatPage;
