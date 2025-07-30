import Link from 'next/link';
import React from 'react';

const AboutLayout = ({ children }) => {
    return (
        <div>
            <ul className='my-6 py-4 flex gap-6 underline text-blue-500'>
                <li><Link href="/about/mission">Mission</Link></li>
                <li><Link href="/about/vission">Vission</Link></li>
                <li><Link href="/about/fission">Fission</Link></li>
            </ul>
            {children}
        </div>
    );
};

export default AboutLayout;