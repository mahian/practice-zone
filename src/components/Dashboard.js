import React, { useState } from 'react';

const Dashboard = (props) => {
    const times = [10, 15, 30, 45, 60];
    const [breakTime, setBreakTtime] = useState(0)
    const handleBreakBtn = time =>{
        setBreakTtime(time)
        localStorage.setItem("break time", time);
    }
    
    const breakTimeFromDb = localStorage.getItem("break time");
    return (
        <div className='p-4'>
            <div className='d-flex align-items-center'>
                <img className='profile-img' src='https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/295180433_1389599218214479_7405679272567519554_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3UEfOhgji9EAX_xtCjJ&_nc_ht=scontent.fjsr8-1.fna&oh=00_AT9BpmL7reqHuILI_64mUl2ROrqZdgYlJDhF4-L3KxpCkQ&oe=6339226F' alt="..."/>
                <div className='ms-3'>
                    <h4 className='m-0'>Mahian ahmad</h4>
                    <p className='m-0'>location here</p>
                </div>
            </div>
            <div className='bg-prime text-white p-4 mt-4 rounded'>
                <div className='d-flex justify-content-between'>
                    <p className='m-0 fw-bold'>Typing</p>
                    <p className='m-0 fw-bold'>60/WPM</p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <p className='m-0 fw-bold'>Programming</p>
                    <p className='m-0 fw-bold'>50%</p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <p className='m-0 fw-bold'>Typing</p>
                    <p className='m-0 fw-bold'>60/WPM</p>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <p className='m-0 fw-bold'>Typing</p>
                    <p className='m-0 fw-bold'>60/WPM</p>
                </div>
            </div>
            <h4 className='py-2 mt-3'>add a break</h4>
            <div className='d-flex flex-wrap bg-light p-2 rounded'>
                {
                    times.map(time => <button className='break-button' onClick={()=> handleBreakBtn(time)}>{time} minutes</button>)
                }
            </div>
            <h4 className='py-2'>Practice details</h4>
            <div className='d-flex justify-content-between bg-light p-4 rounded'>
                <p className='m-0 fw-bold'>practice time :</p>
                <p className='m-0 fw-bold text-secondary'>{props.time}min</p>
            </div>
            <div className='d-flex justify-content-between bg-light p-4 rounded mt-2'>
                <p className='m-0 fw-bold'>Breake time :</p>
                <p className='m-0 fw-bold text-secondary'>{breakTimeFromDb ? breakTimeFromDb : 0}min</p>
            </div>
            <button className='btn-prime mt-4 w-100 rounded'>Activity completed</button>
        </div>
    );
};

export default Dashboard;