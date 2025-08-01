import React, { Suspense } from 'react';
import getSignlePost from '../../lib/getSinglePost';
import getPostComments from '../../lib/getPostComments';
import Comments from '@/src/app/components/Comments'


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
    const postPromise = getSignlePost(id);
    const commentPromise = getPostComments(id);
    // const [post, comments] = await Promise.all([postPromise, commentPromise]);

    const post = await postPromise;

    return (
        <div className='border border-gray-800 px-3 py-2 rounded-md space-y-3'>
            <p className='font-semibold bg-green-500 px-4 py-1 inline-block rounded-md'> {post.id} </p>
            <h2 className='font-bold text-2xl'> {post.title} </h2>
            <p> {post.body} </p>

            <div className='mt-6'>
                <Suspense>
                    <Comments commentPromise={commentPromise}></Comments>
                </Suspense>
            </div>
        </div>
    );
};

export default SinglePost;