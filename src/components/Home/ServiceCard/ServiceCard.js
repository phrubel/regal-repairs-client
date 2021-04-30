import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const { serviceName, serviceDescription, servicePrice, image, _id } = props.service
    const history = useHistory()
    const handleOrder = () => {
        history.push(`/order/${_id}`)
    }
    return (
       
        <div className="container col-md-4">
            <div class="card">
                <div className="face face1">
                    <div className="content">
                        <img className='img-fluid' src={`data:image/png;base64,${image.img}`} alt="this is image" />
                        <h3>{serviceName}</h3>
                    </div>
                </div>

                <div className="face face2">
                    <div className="content">
                        <p>{serviceDescription}</p>
                        <h5>${servicePrice} Starting</h5>
                        <button onClick={handleOrder} className='btn btn-danger'>Get Service</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default ServiceCard;