import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <ul className='my-6 py-4 flex gap-6 underline text-blue-500'>
                <li><Link href="/about/mission">Mission</Link></li>
                <li><Link href="/about/vission">Vission</Link></li>
                <li><Link href="/about/fission">Fission</Link></li>
            </ul>

            <h1>This Is About Page</h1>
        </div>
    );
};

export default About;