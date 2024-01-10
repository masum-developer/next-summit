import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const posts = await getAllPosts()
    return (
        <div className='mt-5 text-center'>
            <h2>Post Page</h2>
            <div className='text-left'>
                {
                    posts.map(post => <p key={post.id}>{post.id} <Link href={`/post/${post.id}`}>{post.title}</Link></p>)
                }
            </div>
        </div>
    );
};

export default page;