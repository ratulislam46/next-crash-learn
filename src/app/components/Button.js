"use client"
import React from 'react';

const Button = () => {
    return (
        <div className='mt-6'>
            <button
                onClick={() => console.log('clicked me')}
                className='bg-green-500 px-4 py-1 rounded-md'>Clicked</button>
        </div>
    );
};

export default Button;