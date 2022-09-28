import React from 'react';

const Nav = () => {
    return (
        <div className='bg-primary text-white p-2'>
            <div className='d-flex align-items-center'>
                <img style={{height: '40px', width: '40px'}} src='assets/logo.png' alt="..."/>
                <h2>practice-zone.</h2>
            </div>
        </div>
    );
};

export default Nav;