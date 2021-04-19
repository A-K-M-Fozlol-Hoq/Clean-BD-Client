import React, { useEffect } from 'react';
import Review from '../Review/Review';
import './Reviews.css'
import { useState } from 'react';



const Reviews = () => {
    const [reviews, setReviews] = useState([]) 
    useEffect( () => {
        fetch('https://pure-shore-45304.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
       <section className="Reviews my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">REVIEWS</h5>
                    <h1>What People Says About US</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(review => <Review  review={review} key={review._id}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Reviews;