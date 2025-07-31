import React from 'react';
import getSignlePost from '../../lib/getSinglePost';


export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getSignlePost(id);
    return {
        title: `Learn Next Js | ${post.title}`,
        description: post.body
    }
}

const SinglePost = async ({ params }) => {
    const { id } = await params;
    const post = await getSignlePost(id);
    // console.log(post);

    return (
        <div className='border border-gray-800 px-3 py-2 rounded-md'>
            <p className='font-semibold'> {post.id} </p>
            <h2 className='font-bold text-2xl'> {post.title} </h2>
            <p> {post.body} </p>
        </div>
    );
};

export default SinglePost;