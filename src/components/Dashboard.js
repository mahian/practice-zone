import React, { useState } from 'react';

const Dashboard = (props) => {
    const times = [10, 15, 30, 45, 60];
    const [breakTime, setBreakTtime] = useState(0)
    const handleBreakBtn = time =>{
        setBreakTtime(time)
    }
    return (
        <div className='p-4'>
            <div className='d-flex'>
                <img className='profile-img' src='https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/295180433_1389599218214479_7405679272567519554_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3UEfOhgji9EAX_xtCjJ&_nc_ht=scontent.fjsr8-1.fna&oh=00_AT9BpmL7reqHuILI_64mUl2ROrqZdgYlJDhF4-L3KxpCkQ&oe=6339226F' alt="..."/>
                <div>
                    <h4>Mahian ahmad</h4>
                    <p>location here</p>
                </div>
            </div>
            <div className='d-flex justify-content-between bg-light p-4 rounded'>
                <div className='d-flex flex-column align-items-center'>
                    <h3>100</h3>
                    <span>kg</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h3>100</h3>
                    <span>kg</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h3>100</h3>
                    <span>kg</span>
                </div>
            </div>
            <h4 className='py-2'>add a break</h4>
            <div className='d-flex justify-content-between bg-light p-4 rounded'>
                {
                    times.map(time => <button className='break-button' onClick={()=> handleBreakBtn(time)}>{time}</button>)
                }
            </div>
            <h4 className='py-2'>Practice details</h4>
            <div className='d-flex justify-content-between bg-light p-4 rounded'>
                <p>practice time</p>
                <span>{props.time}min</span>
            </div>
            <div className='d-flex justify-content-between bg-light p-4 rounded mt-2'>
                <p>brake time</p>
                <span>{breakTime}</span>
            </div>
            <button className='btn btn-primary mt-3'>Activity completed</button>
        </div>
    );
};

export default Dashboard;