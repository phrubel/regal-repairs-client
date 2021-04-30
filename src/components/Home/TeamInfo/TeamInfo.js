import React from 'react';

const TeamInfo = (props) => {
    const { name, desig, img } = props.teamMembar
    
    return (

        <div className='col-md-4 background text-center'>
            <img className='img-fluid' src={img} alt="" />
            <h5 className="mt-3 mb-3 text-secondary">{name}</h5>
            <h5>{desig}</h5>
        </div>


    );
};

export default TeamInfo;