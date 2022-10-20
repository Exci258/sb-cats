import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const AddCatPage = () => {
    const navigate = useNavigate();

    const [rate, setRate] = useState(10);

    const handleRate = (e) => {
        setRate(e.target.value);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch('http://sb-cats.herokuapp.com/api/2/exci258/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        reset();
        navigate('/');
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-col items-center justify-start pt-4 grow'>
                <h1 className='text-2xl font-bold'>Добавить кота</h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='bg-white shadow-lg rounded-2xl px-8 pt-6 pb-6 my-4 w-80'
                >
                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='id'
                    >
                        ID кота
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('id', {
                            valueAsNumber: true,
                            required: 'Обязательное поле!',
                        })}
                        type='number'
                        min='0'
                        name='id'
                        placeholder='...'
                    />
                    <div className='block text-red-500 text-md font-semibold pt-2'>
                        {errors?.id && <p>{errors?.id.message}</p>}
                    </div>

                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='name'
                    >
                        Имя
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('name', {
                            required: 'Обязательное поле!',
                        })}
                        name='name'
                        placeholder='...'
                    />
                    <div className='block text-red-500 text-md font-semibold pt-2'>
                        {errors?.name && <p>{errors?.name.message}</p>}
                    </div>
                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='img_link'
                    >
                        Ссылка на фото
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('img_link')}
                        name='img_link'
                        placeholder='...'
                    />
                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='age'
                    >
                        Возраст
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('age', {
                            valueAsNumber: true,
                        })}
                        type='number'
                        min='0'
                        name='age'
                        placeholder='...'
                    />
                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='rate'
                    >
                        Рейтинг: {rate}
                    </label>
                    <input
                        className='w-full text-gray-700 cursor-pointer'
                        {...register('rate', {
                            valueAsNumber: true,
                        })}
                        type='range'
                        min='0'
                        max='10'
                        name='rate'
                        placeholder='...'
                        onChange={handleRate}
                    />
                    <label
                        className='block text-black text-lg font-semibold pt-2'
                        htmlFor='description'
                    >
                        Описание
                    </label>
                    <textarea
                        className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('description')}
                        name='description'
                        cols='30'
                        rows='3'
                    ></textarea>
                    <div className='flex items-center justify-center gap-3'>
                        <label
                            className='block text-black text-lg font-semibold'
                            htmlFor='favourite'
                        >
                            Любимчик?
                        </label>
                        <input
                            {...register('favourite')}
                            type='checkbox'
                            className='w-5 h-5'
                        />
                    </div>
                    <button className='bg-green-600 hover:bg-green-600 text-white text-lg font-bold py-2 px-4 border border-green-600 rounded mt-3 w-full hover:scale-105 transform transition duration-200'>
                        Добавить
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddCatPage;
