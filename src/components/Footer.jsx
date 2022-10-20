import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='shadow-lg bg-white overflow-hidden'>
            <div className='container w-2/3 lg:w-full mx-auto px-12 py-2 flex gap-5 justify-center items-center'>
                <span className='text-xl font-bold font-mono'>©2022</span>
                <a
                    href='https://github.com/exci258'
                    target='_blank'
                    rel='noreferrer'
                >
                    <AiFillGithub size={40} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
