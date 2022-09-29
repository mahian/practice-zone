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
    const [WorkTime, setWorkTtime] = useState(0)

    const handleWorkBtn = time => {
        setWorkTtime(WorkTime + time);
        localStorage.setItem("Work time", WorkTime);
    };
    const workTimeFromDb = localStorage.getItem("Work time");
    return (
        <div className='works'>
            <div>
                <h4 className='my-5' style={{color: "var(--primary-color)"}}>Select today’s practice</h4>
                <div className='works-container'>
                {
                    works.map(work => <Work key={work.id} works={work} handleBtn={handleWorkBtn}></Work>)
                }  
                </div>
            </div>
            <Dashboard time={workTimeFromDb}></Dashboard>
        </div>
    );
};

export default Works;