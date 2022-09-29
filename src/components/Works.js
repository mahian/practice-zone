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
    const [time, setTtime] = useState(0)
    const handleWorkBtn = time => {
        setTtime(time);
    };
    return (
        <div className='works'>
            <div>
                <h3 className='my-5'>Select today’s practice</h3>
                <div className='works-container'>
                {
                    works.map(work => <Work key={work.id} works={work} handleBtn={handleWorkBtn}></Work>)
                }  
                </div>
            </div>
            <Dashboard time={time}></Dashboard>
        </div>
    );
};

export default Works;