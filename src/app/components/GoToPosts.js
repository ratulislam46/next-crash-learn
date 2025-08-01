import Link from 'next/link'
import React from 'react'

export default function GoToPosts() {
    return (
        <div className='mt-3 mb-1'>
            <Link
                href='/posts'
                className='px-4 py-2 bg-green-500 hover:text-blue-500 rounded-md'
            >
                Go Back
            </Link>
        </div>
    )
}
