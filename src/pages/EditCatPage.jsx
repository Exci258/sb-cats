import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const EditCatPage = ({ cats, handleEdit }) => {
    const navigate = useNavigate();

    const [rate, setRate] = useState(10);

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

    const handleRate = (e) => {
        setRate(e.target.value);
    };

    const onSubmit = (data) => {
        for (const key in data) {
            if (!data[key] && key !== 'favourite') {
                delete data[key];
            }
        }
        handleEdit(data);
        reset();
        navigate('/sb-cats/');
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='flex flex-col items-center justify-start pt-4 grow'>
                <h1 className='text-2xl font-bold'>Изменить кота</h1>
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
                    <button className='bg-amber-500 hover:bg-amber-500 text-white text-lg font-bold py-2 px-4 border border-amber-500 rounded mt-3 w-full hover:scale-105 transform transition duration-200'>
                        Изменить
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default EditCatPage;
