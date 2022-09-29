import React from 'react';

const Blog = (props) => {
    const {quetion, ans} = props.post;
    return (
        <div className='blog mt-4 bg-light p-4' style={{borderBottom: "2px solid var(--primary-color)"}}>
            <h2>{quetion}</h2>
            <p>{ans}</p>
        </div>
    );
};

export default Blog;