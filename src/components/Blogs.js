import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const post = [
        {
            quetion: 'que1',
            ans: 'ans2',
        },
        {
            quetion: 'que2',
            ans: 'ans2',
        },
        {
            quetion: 'que3',
            ans: 'ans3',
        }
    ]
    return (
        <div>
            <Blog></Blog>
        </div>
    );
};

export default Blogs;