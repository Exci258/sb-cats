import React, { useState } from 'react';
import defaultAvatar from '../default-avatar.webp';
import {
    AiOutlineCloseSquare,
    AiFillHeart,
    AiOutlineHeart,
} from 'react-icons/ai';
import CatRating from './CatRating';

const CatCard = ({
    catImg,
    catName,
    catRating,
    catDescription,
    catAge,
    catFavourite,
}) => {
    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active);
    };

    const getCorrectAge = (age) => {
        if (age % 100 < 11 || age % 100 > 14) {
            if (age % 10 === 1) {
                return `${age} год`;
            } else if (age % 10 >= 2 && age % 10 <= 4) {
                return `${age} года`;
            } else {
                return `${age} лет`;
            }
        } else {
            return `${age} лет`;
        }
    };

    return (
        <div className='cat__card' onClick={handleActive}>
            <div className='container w-80 bg-white rounded-md border-2 border-black hover:scale-110 transform transition duration-500 hover:cursor-pointer'>
                <div className='flex flex-col items-center p-2'>
                    <img
                        src={catImg || defaultAvatar}
                        alt='Avatar'
                        className='rounded-md h-36'
                    />
                    <h3 className='text-xl font-bold'>{catName}</h3>
                    <CatRating value={catRating} />
                </div>
            </div>
            <div className={active ? 'modal active z-50' : 'modal'}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='container relative bg-white rounded-md border-2 border-black w-[90vw] md:w-[60vw] lg:w-[50vw] xl:w-[30vw]'
                >
                    <button
                        onClick={handleActive}
                        className='absolute top-0 right-0 hover:scale-110'
                    >
                        <AiOutlineCloseSquare size={30} />
                    </button>
                    <div className='flex flex-col items-center p-3'>
                        <h3 className='text-2xl font-bold pb-3'>{catName}</h3>
                        <img
                            src={catImg || defaultAvatar}
                            alt='Avatar'
                            className='rounded-lg max-h-60'
                        />
                        <div className='flex flex-col text-xl font-semibold mt-2'>
                            <span className='px-2 py-1 bg-[#08a652] rounded-md text-white'>
                                {getCorrectAge(catAge)}
                            </span>
                        </div>
                        <p className='text-lg font-semibold text-center border-2 rounded-xl p-2 border-black mt-2'>
                            {catDescription}
                        </p>
                        <span className='absolute top-0 left-0'>
                            {catFavourite ? (
                                <AiFillHeart size={30} fill={'#e11d48'} />
                            ) : (
                                <AiOutlineHeart size={30} fill={'#e11d48'} />
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatCard;
