import React, { useState } from 'react';
import { useEffect } from 'react';
import BookingCard from '../BookingCard/BookingCard';



const BookOrder = ({date}) => {

    const [bookingData, setBookingData] =  useState({});
    useEffect( () => {
        fetch('http://localhost:5000/bookingData')
        .then(res => res.json())
        .then(data => setBookingData(data))
    }, [])
    // console.log(bookingData)

    return (
        <section>
            <div className="row">
                {
                    bookingData.length>0?
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking._id}></BookingCard>):
                    <div></div>
                }
            </div>
        </section>
    );
};

export default BookOrder;