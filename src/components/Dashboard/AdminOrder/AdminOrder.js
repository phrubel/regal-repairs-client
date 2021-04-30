import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminOrder = () => {
    const [allOrder, setAllOrder] = useState([])


    useEffect(() => {
        fetch('https://sleepy-mesa-43385.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])
    console.log(allOrder)

    return (

        <div className='container-fluid row' >
            <Sidebar></Sidebar>
            <main className='col-md-10 mt-5 '>
                <h4 className='text-secondary text-center'>Your Order List</h4>
                <table className="table mt-5 shadow" style={{ position: "absolute", marginLeft: "20%", width: "90%" }}>
                    <thead className="thead-danger">
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allOrder.map(orderBy =>
                                <tr>
                                    <td>{orderBy.name}</td>
                                    <td> {orderBy.email}</td>
                                    <td> {orderBy.service}</td>
                                    <td>Credit Card</td>
                                    <td>Pending</td>

                                </tr>)
                        }


                    </tbody>
                </table>
            </main>
        </div >

    );
};

export default AdminOrder;