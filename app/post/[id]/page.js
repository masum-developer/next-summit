import getPost from '@/lib/getPost';
import React from 'react';

const PostPage = async ({ params }) => {
    const { id } = params
    const post = await getPost(id)
    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    );
};

export default PostPage;