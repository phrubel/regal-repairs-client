import React from 'react';



const ChoiseInfo = (props) => {
    const { img, title, desc } = props.choise

    return (
        <div className='col-md-4 text-center'>
            <img style={{ height: "90px" }} src={img} alt="" />
            <h5 className="mt-3 mb-3 text-white">{title}</h5>
            <p className='text-white'>{desc}</p>
        </div>



    );
};

export default ChoiseInfo;