import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'


const Review = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://sleepy-mesa-43385.herokuapp.com/testimonial')
        .then(res=> res.json())
        .then(data=>{
            setTestimonials(data)
            console.log(data)
        })
    }, [])

    return (
        <section>
            <section className="testimonials my-5 py-5">
                <div className="container">
                    <div className="section-header">
                        <h5 className="text-primary text-center text-uppercase">Our Customer Review</h5>
                        <h5 className='text-center text-secondary'>What's People Say us</h5>
                    </div>
                    <div className="card-deck mt-5">
                        {
                            testimonials.map(testimonial => <Card style={{ width: '18rem', align: 'center', marginBottom: '5%' }} className="text-center bg-light">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <Card.Img variant="top" className="image-fluid " style={{ width: '50%', borderRadius: '50px' }} src={testimonial.img} />
                                        </div>
                                        <div className="text-left">
                                            <Card.Title>{testimonial.name} <br /> <small>{testimonial.designation}</small></Card.Title>

                                        </div>
                                    </div>
                                    <Card.Text>
                                        {testimonial.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                        }
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Review;