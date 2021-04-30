import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';



const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        fetch('https://sleepy-mesa-43385.herokuapp.com/makeAAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('You added admin successfully')
                }
            })
    }
    return (
        <div className='mt-5'>
            <h4 style={{ marginLeft: "30vw", position: "absolute" }}>Add Admin</h4>
            <Sidebar></Sidebar>
            <div>
                <div className="justify-content-end mt-5 pt-5 ">

                    <div className="ml-auto">
                        <form className="container shadow container-fluid " onSubmit={handleSubmit(onSubmit)} style={{ width: '70vw', marginTop: '5%' }}>
                            <input className="form-control" name="email" placeholder="Add Admin Email" ref={register({ required: true })} /><br />
                            {errors.email && <span>your email is required<br /></span>}
                            <input class="pr-5 pl-5 bg-success text-white pt-2 pb-2" style={{ borderRadius: "5px" }} type="submit" value="Add Admin" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakeAdmin;