import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';






const Servicess = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('https://sleepy-mesa-43385.herokuapp.com/allService')
        .then(res=> res.json())
        .then(data=>{
            setServices(data)
            console.log(data)
        })
    },[])


    return (
        <section className='mt-5'>
             <div className='text-center'>
                <h5 style={{ color: "#1cc7c1", fontWeight: "600" }}>OUR SERVICESS</h5>
              
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                    }
                </div>
                </div>
        </section>
    );
};

export default Servicess;