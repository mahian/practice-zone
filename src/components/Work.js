import React from 'react';

const Work = (props) => {
    const {name, time, img} = props.works;
    const {handleBtn} = props;
    
    return (
        <div className='work p-3 rounded bg-light'>
            <div className="card border-0 bg-light">
            <img src={img} className="card-img-top img-fluid work-img rounded" alt="..." />
            <div className="card-body">
                <h5 className="card-title pt-3">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className='text-secondary fw-bold'>{time} min</p>
                <button onClick={()=> handleBtn(time)} className="btn-prime">Go somewhere</button>
            </div>
            </div>
        </div>
    );
};

export default Work;