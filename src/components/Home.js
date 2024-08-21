import React from 'react';
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
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;