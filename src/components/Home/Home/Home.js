import React from 'react';
import Header from '../Header/Header';
import ChoiseUs from '../ChoiseUs/ChoiseUs';
import Footer from '../../Shared/Footer/Footer';
import Servicess from '../Servicess/Servicess';
import Review from '../Review/Review';
import OurTeam from '../OurTeam/OurTeam';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Servicess></Servicess>
            <ChoiseUs></ChoiseUs>
            <OurTeam></OurTeam>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;