import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [userOrder, setUserOrder] = useState([])

    useEffect(() => {
        fetch(`https://sleepy-mesa-43385.herokuapp.com/userOrder?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setUserOrder(data))
    }, [])

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
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userOrder.map(singleOrder =>
                                <tr>
                                    <td>{singleOrder.name}</td>
                                    <td> {singleOrder.email}</td>
                                    <td> {singleOrder.service}</td>
                                    <td>$ {singleOrder.servicePrice}</td>

                                </tr>)
                        }

                    </tbody>
                </table>
            </main>
        </div >
    );
};

export default OrderList;