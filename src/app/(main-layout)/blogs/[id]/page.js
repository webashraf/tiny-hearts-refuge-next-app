import React from 'react';

const SingleBlogPage =  async({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const blog = await res.json();
    console.log(params.id)
    return (
        <div className='pb-32'>
            <h1 className='text-7xl font-serif uppercase pt-3 pb-10 underline'>{blog?.title}</h1>
            <p className='font-mono text-xl'>{blog?.body}</p>
        </div>
    );
};

export default SingleBlogPage;