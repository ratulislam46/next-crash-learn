import React from 'react'

export default async function Comments({ commentPromise }) {
    const comments = await commentPromise;
    return (
        <div className='border border-gray-900 rounded-md p-3 space-y-3'>
            {comments.map(comment =>
                <li key={comment.id}
                className='hover:bg-gray-500 hover:rounded-md hover:p-2'
                >{comment.body}</li>
            )}
        </div>
    )
}
