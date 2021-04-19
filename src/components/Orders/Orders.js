import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}


const Orders = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center">
                <div>
                    <h3>You have {bookings.length} Orders</h3>
                    {
                        bookings.map(book => <li key={book._id}>{book.name}</li>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Orders;