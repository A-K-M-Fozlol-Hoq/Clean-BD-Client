import React from 'react';
import custom from '../../../images/custom.webp'
const CustomService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={custom} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>custom house cleaning Services</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas magnam voluptatum temporibus, ut dicta quia, deleniti quo doloribus voluptate cupiditate maiores nemo nesciunt praesentium pariatur voluptatem blanditiis asperiores! Nam assumenda neque sed quaerat nisi corrupti quia, aliquid eos placeat iusto, illum odit incidunt alias maxime temporibus doloremque rem veniam!
                        </p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomService;