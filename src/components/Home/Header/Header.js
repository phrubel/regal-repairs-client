import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import './Header.css'
import headerImg from '../../../image/headerImg.jpg'

const Header = () => {
    return (
        <div className='header'>
            <Menubar></Menubar>
            <div className='row d-flex align-items-center'>
                <div className="col-md-5 py-5 px-5">
                    <h1 className='heading'>Fast & Quick Repair <br/> Service</h1>
                    <h5 style={{color:"white"}}>Just send valuable laptop, PC, MAC, Mobile,<br/>
                        Gaming Device or Smartphone and we'll take care of it.</h5>
                        <button className='btn btn-success'>More</button>
                </div>
                <div className='col-md-7 pt-2 px-5'>
                    <img style={{height:"400px"}} className='img-fluid' src={headerImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;