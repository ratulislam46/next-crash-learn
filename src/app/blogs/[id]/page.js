import { notFound } from 'next/navigation';
import React from 'react';

const SignleBlog = async ({ params }) => {
    const { id } = await params;

    if (id === '3') {
        notFound();
    }

    return (
        <div>
            The blog id is: {id}
        </div>
    );
};
export default SignleBlog;
