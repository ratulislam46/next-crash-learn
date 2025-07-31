import React from 'react';
import Link from 'next/link';
import getAllPosts from '../lib/GetAllPosts';

const AllPosts = async () => {
    const posts = await getAllPosts();
    // console.log(posts);

    return (
        <div>
            <h1>All Post</h1>
            <ul className='mt-6'>
                {posts.map(post =>
                    <Link key={post.id}
                        href={`/posts/${post.id}`}>
                        <li
                            className='py-2 px-3 rounded-md mb-3 border border-gray-900'
                        >
                            {post.title}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    );
};

export default AllPosts;