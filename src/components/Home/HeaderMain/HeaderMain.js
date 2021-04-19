import React from 'react';
import { Link } from 'react-router-dom';
import coverPhoto from '../../../images/coverPhoto.PNG';


const HeaderMain = () => {

    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Our Mission <br /> <b>Build a Clean Bangladesh</b></h1>
                <p className="text-secondary">BD Clean a youth based platform covered with red green spirit is working relentlessly to name Bangladesh as the cleanest country on the world.</p>
                <Link to="/appointment" className="btn btn-brand">Book An Order</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={coverPhoto} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;