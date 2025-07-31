import Image from 'next/image';
import React from 'react';
import nature from '@/public/images/nature.jpg'


export const metadata = {
    title: "Learn Next JS | About",
    description: "Mission, vission, fission routes here",
};

const About = () => {
    // throw new Error('error')
    return (
        <div>
            <h1>This Is About Page</h1>

            <Image src={nature} alt='nature' />

        </div>
    );
};

export default About;