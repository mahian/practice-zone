import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Work from './Work';

const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setWorks(data))
    }, []);
    return (
        <div className='works'>
            <div>
                <h3 className='my-3'>Age Select today’s practice</h3>
                <div className='works-container'>
                {
                    works.map(work => <Work works={work}></Work>)
                }  
                </div>
            </div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Works;