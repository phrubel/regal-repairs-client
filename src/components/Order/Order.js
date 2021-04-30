import React, { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import PaymentMethod from '../PaymentMethod/PaymentMethod'

const Order = () => {
    const { _id } = useParams()
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [newOrder, setNewOrder] = useState([])


    const handelPayment = (paymentId) => {
        const orderDetails = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            service: newOrder.serviceName,
            servicePrice: newOrder.servicePrice,
            bookingStatus: "painding",
            paymentId,
            placeTime: new Date(),
        };

        fetch('https://sleepy-mesa-43385.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push('/orderList')
                    alert('your order placed successfully')
                }

            })
        console.log('ki hoise..?')
    }

    useEffect(() => {
        fetch(`https://sleepy-mesa-43385.herokuapp.com/order/${_id}`)
            .then(res => res.json())
            .then(data => setNewOrder(data))
    }, [_id])
    console.log(newOrder)



    return (
        <div>
            <div className="d-flex container-fluid p-3">
                <Sidebar></Sidebar>
            </div>


            <div className="pb-5" style={{ position: "absolute", marginLeft: "20%", width: "55%" }}>
                <Form className="col-md-8">
                    <Form.Group controlId="nameFild">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={loggedInUser.name}
                            type="text"
                            placeholder="Name"
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group controlId="emailFild">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    value={loggedInUser.email}
                                />
                            </Form.Group>

                        </Col>
                        <Col>
                            <Form.Group controlId="serviceChargelFild">
                                <Form.Label>Service Charge</Form.Label>
                                <Form.Control
                                    type="text"
                                    readOnly
                                    placeholder="ServiceCharge"
                                    value={"$" + newOrder.servicePrice}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="serviceNameFild">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control
                            readOnly
                            value={newOrder.serviceName}
                        />
                    </Form.Group>
                </Form>
                <PaymentMethod handelPayment={handelPayment} ></PaymentMethod>
            </div>

        </div>
    );
};

export default Order;
