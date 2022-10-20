import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const CatRating = ({ value }) => {
    const fillStar = [...Array(value)];
    const outlineStar = [...Array(10 - value)];
    return (
        <div className='flex my-2'>
            {fillStar.map((v, i, a) => {
                return (
                    <span key={a.length * Math.random()}>
                        <AiFillStar size={20} fill={'#f97316'} />
                    </span>
                );
            })}
            {outlineStar.map((v, i, a) => {
                return (
                    <span key={a.length * Math.random()}>
                        <AiOutlineStar size={20} fill={'#f97316'} />
                    </span>
                );
            })}
        </div>
    );
};

export default CatRating;
