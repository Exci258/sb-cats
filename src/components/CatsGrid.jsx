import React, { useState, useEffect } from 'react';
import CatCard from './CatCard';

const CatsGrid = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('http://sb-cats.herokuapp.com/api/2/exci258/show')
            .then((response) => response.json())
            .then((cats) => setCats(cats.data));
    }, []);
    return (
        <div className='container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 justify-items-center mx-auto py-10 mb-8'>
            {cats
                .filter((cat) => cat.id) // Призракам привет! (Да, у меня лапки)
                .map((cat) => {
                    return (
                        <CatCard
                            key={cat._id}
                            catImg={cat.img_link}
                            catName={cat.name}
                            catRating={cat.rate}
                            catDescription={cat.description}
                            catAge={cat.age}
                            catFavourite={cat.favourite}
                        />
                    );
                })}
        </div>
    );
};

export default CatsGrid;
