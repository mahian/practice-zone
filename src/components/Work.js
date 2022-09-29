import React from 'react';

const Work = (props) => {
    const {name, time} = props.works;
    const {handleBtn} = props;
    
    return (
        <div classNameName='work'>
            <div className="card">
            <img src="https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>{time}</p>
                <button onClick={()=> handleBtn(time)} className="btn btn-primary">Go somewhere</button>
            </div>
            </div>
        </div>
    );
};

export default Work;