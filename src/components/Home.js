import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Footer from '../components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const images = [
        '/images/portland-photographer-cannon-beach-1-1024x682.jpg',
        '/images/portland-photographer-cannon-beach-7-1024x682.jpg',
        '/images/portland-photographer-cannon-beach-14-1024x682.jpg',
        '/images/portland-photographer-cannon-beach-15-1068x1600.jpg',
    ];

    const [countdown, setCountdown] = useState({ years: 0, months:0, days:0, hours:0, 
        minutes:0, seconds:0});
    
    useEffect(() => {
        const targetDate = new Date( "May 9, 2026 00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
            const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / 
        (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / 
        (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdown({ years , months , days , hours , minutes , seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ years:0 , months:0 , days:0, hours:0, minutes:0, seconds:0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-wrapper">
            <Slider {...carouselSettings} className='h-screen'>
                {images.map((imageUrl, index) => (
                    <div key={index} className='h-screen'>
                        <img src={imageUrl} alt={`Carousel ${index + 1}`} className='object-cover h-full w-full' />
                    </div>
                ))}
            </Slider>
            <div className='overlay'>
                <div className='content text-gray'>
                    <h1 className='text-8xl text-gray mb-4'>Rebeca & Shantel</h1>
                    <p className='text-white-600 text-5xl mb-8'>
                        We're Getting Married!
                    </p>
                    <p className='text-white-600 text-4xl'>
                        Save the Date: May 9th,2026
                    </p>
                    <div className="countdown text-white-600 text-6xl mt-8">
                        <p>{countdown.years} : {countdown.months} : {countdown.days} : {countdown.hours} : {countdown.minutes} : {countdown.seconds} </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;