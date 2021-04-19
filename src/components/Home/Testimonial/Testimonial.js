import React from 'react';

const Testimonial = (props) => {
    const {name, title, description} = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
            <img style={{height: '200px'}} src={`data:image/png;base64,${props.testimonial.image.img}`}/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default Testimonial;