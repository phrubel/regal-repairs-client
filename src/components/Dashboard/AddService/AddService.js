import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useHistory } from 'react-router';

const AddService = () => {
    const history = useHistory();

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)



    const handleBlur = data => {
        const newInfo = { ...info }
        newInfo[data.target.name] = data.target.value;
        setInfo(newInfo)
    }


    const handleFileChange = (data) => {
        const newFile = data.target.files[0]
        setFile(newFile)
    }


    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('serviceDescription', info.serviceDescription)
        formData.append('servicePrice', info.servicePrice)


        fetch('https://sleepy-mesa-43385.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
              if(data){
                alert('You are added service successfully')
                history.push('/manageService')
              }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='container-fluid row' >
            <Sidebar></Sidebar>
            <div className='col-md-10 p-4 pr-5 mt-5 shadow' style={{ position: "absolute", marginLeft: "20%", width: "75%" }}>
                <h4 className='text-brand'>Add Service</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Service Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Service Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Service Description</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="serviceDescription" placeholder="Service Description" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Service Price</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="servicePrice" placeholder="Service Price" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Image" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;