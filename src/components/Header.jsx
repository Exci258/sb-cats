import React from 'react';
import { GiHollowCat } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-lg bg-white'>
            <header className='container mx-auto py-2 flex justify-between items-center'>
                <Link
                    to={'/sb-cats/'}
                    className='flex gap-2 items-center hover:scale-105 hover:bg-slate-200 hover:rounded-3xl'
                >
                    <GiHollowCat size={55} fill={'#08a652'} />
                </Link>
                <div className='flex gap-2'>
                    <Link
                        to={'/sb-cats/add'}
                        className='text-sm sm:text-xl text-white font-bold font-mono bg-green-600 p-2 rounded-lg hover:scale-105 border-2 border-zinc-800 transform transition duration-200'
                    >
                        Добавить
                    </Link>
                    <Link
                        to={'/sb-cats/edit'}
                        className='text-sm sm:text-xl text-white font-bold font-mono bg-amber-500 p-2 rounded-lg hover:scale-105 border-2 border-zinc-800 transform transition duration-200'
                    >
                        Изменить
                    </Link>
                    <Link
                        to={'/sb-cats/delete'}
                        className='text-sm sm:text-lg md:text-xl text-white font-bold font-mono bg-red-600 p-2 rounded-lg hover:scale-105 border-2 border-zinc-800 transform transition duration-200'
                    >
                        Удалить
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
