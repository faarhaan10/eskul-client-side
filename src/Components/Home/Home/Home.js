import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <About />
            <Contact />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;