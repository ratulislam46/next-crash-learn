import Link from 'next/link';
import React from 'react';

const Blogs = [
    {
        id: 1,
        title: 'blog 1',
        description: 'blog 1 description',
        image: 'blog 1 image'
    },
    {
        id: 2,
        title: 'blog 2',
        description: 'blog 2 description',
        image: 'blog 2 image'
    }
]

const BlogsPage = () => {
    return (
        <div>
            <h1>All blogs here</h1>
            <ul className='mt-8'>
                {Blogs.map((blog) => (
                    <li key={blog.id} className='mb-2'>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogsPage;