import React, { useEffect } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'
import { useState } from 'react';



const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]) 
    useEffect( () => {
        fetch('https://pure-shore-45304.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    
    return (
       <section className="testimonials my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">TESTIMONIALS</h5>
                    <h1>Customers Testimonials</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial  testimonial={testimonial} key={testimonial._id}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Testimonials;