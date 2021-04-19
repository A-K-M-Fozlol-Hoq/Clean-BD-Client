import React from 'react';
import CustomService from '../CustomService/CustomService';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <CustomService></CustomService>
            <Reviews></Reviews>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;