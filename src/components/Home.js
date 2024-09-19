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
        autoplaySpeed: 3000
    };

    const images = [
        'images/R+S-013.jpg',
        'images/R+S-038.jpg',
        'images/R+S-040.jpg',
        'images/R+S_bw-10.jpg',
        'images/R+S-041.jpg',
        'images/R+S-083.jpg',
        'images/R+S-086.jpg',
        'images/R+S-089.jpg',
        'images/R+S_bw-62.jpg',
        'images/R+S-091.jpg',
        'images/R+S-094.jpg',
        'images/R+S-104.jpg',
        'images/R+S-113.jpg',
        'images/R+S-120.jpg',
        'images/R+S_bw-21.jpg',
        'images/R+S-144.jpg',
        'images/R+S-146.jpg',
        'images/R+S-149.jpg',
        'images/R+S-150.jpg',
        'images/R+S-156.jpg'
    ];

    const [countdown, setCountdown] = useState({
        years: 0, months: 0, days: 0, hours: 0,
        minutes: 0, seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("May 9, 2026 00:00:00").getTime();

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

            setCountdown({ years, months, days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-wrapper">
            {/* Text Content at the Top */}
            <div className='text-center p-4 text-black'>
                <h1 className='text-7xl mb-4'>Rebeca & Shantel</h1>
                <p className='text-5xl mb-4'>We're Getting Married!</p>
                <p className='text-4xl'>Save the Date: May 9th, 2026</p>
            </div>

            {/* Countdown Timer */}
            <div className="countdown text-white-600 text-4xl" style={{ textAlign: "center" }}>
                <p>{countdown.years} : {countdown.months} : {countdown.days} : {countdown.hours} : {countdown.minutes} : {countdown.seconds}</p>
            </div>

            {/* Carousel Slider */}
            <Slider {...carouselSettings} className='slick-slider'>
                {images.map((imageUrl, index) => (
                    <div key={index} className='image-container'>
                        <img
                            src={imageUrl}
                            alt={`Carousel ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
            <Footer />
        </div>
    );
};

export default Home;
