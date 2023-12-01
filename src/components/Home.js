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
                    <h1 className='text-6xl text-gray font-bold mb-4'>Cady and Karen's Wedding</h1>
                    <p className='text-white-600 text-2xl mb-8'>
                        Welcome to our wedding celebration! Join us as we begin this beautiful journey together.
                    </p>
                    <p className='text-white-600 text-2xl'>
                        Save the date: <strong>June 5, 2024</strong>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;