import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';





const Testimonial = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const onSubmit = data => {
        const img = { ...loggedInUser, ...data };

        fetch('https://sleepy-mesa-43385.herokuapp.com/addTestimonial', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(img)
        })
            .then(res => res.json(img))
            .then(result => {
                if (result) {
                    alert('your testimonial added successfully')
                }
            })
    }

    return (
        <div>
            <div className='mt-5'>
                <h4 style={{ marginLeft: "30vw", position: "absolute" }}>Give Us a Review</h4>
            </div>
            <Sidebar></Sidebar>
            <main className='mt-5 shadow' style={{ position: "absolute", marginLeft: "20%", width: "65%" }} >
                <form className="container container-fluid" onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" className="p-4 form-control" defaultValue={loggedInUser.name} ref={register} /> <br />
                    <input name="designation" className="p-4 form-control" placeholder="Your Company's name, designation" ref={register({ required: true })} /> <br />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <input name="comment" className="form-control" placeholder='Description' style={{ height: "20vh" }} ref={register} /> <br />

                    <input className="pr-5 pl-5 bg-danger text-white pt-2 pb-2" style={{ borderRadius: "5px" }} type="submit" />
                </form>
            </main>
        </div>
    );
};

export default Testimonial;