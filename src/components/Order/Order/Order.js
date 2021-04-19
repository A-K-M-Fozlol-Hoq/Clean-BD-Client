import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import OrderHeader from '../OrderHeader/OrderHeader';
import BookOrder from '../BookOrder/BookOrder';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <OrderHeader handleDateChange={handleDateChange}></OrderHeader>
            <BookOrder date={selectedDate}></BookOrder>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;