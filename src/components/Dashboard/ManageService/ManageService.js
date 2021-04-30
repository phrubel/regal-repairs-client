import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'




const ManageService = () => {
    const [handleService, setHandleService] = useState([])

    useEffect(() => {
        getService()
    }, [])

    const getService = () => {
        fetch('https://sleepy-mesa-43385.herokuapp.com/manageService')
            .then(res => res.json())
            .then(data => setHandleService(data))
    }

    const deleteService = (_id) => {
        fetch(`https://sleepy-mesa-43385.herokuapp.com/service/${_id}`, {
            method: 'DELETE',
            headers: { 'content-type': "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, 'delete succes')
                getService()
            })
    }

    const updateService = (_id) => {
        fetch(`https://sleepy-mesa-43385.herokuapp.com/services/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': "application/json" }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, 'delete succes')
                getService()
            })
    }



    return (
        <div className='container-fluid row' >
            <Sidebar></Sidebar>
            <main className='col-md-10 mt-5 '>
                <h4 className='text-secondary text-center'>Manage Service</h4>
                <table className="table mt-5 shadow" style={{ position: "absolute", marginLeft: "20%", width: "90%" }}>
                    <thead className="thead-danger">
                        <tr>

                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            handleService.map(service =>
                                <tr>
                                    <td>{service.serviceName}</td>
                                    <td>$ {service.servicePrice}</td>
                                    <td onClick={() => updateService(service._id)}><FontAwesomeIcon style={{ cursor: "pointer" }} icon={faEdit} /></td>
                                    <td onClick={() => deleteService(service._id)}><FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTrashAlt} /> </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </main>
        </div >
    );
};

export default ManageService;