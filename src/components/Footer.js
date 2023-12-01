import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer () {
    return(
        <footer className=' text-black p-2 text-center'>
            <div className='flex justify-center space-x-4'>
                <a href='https://www.facebook.com/shanteezy.mack/photos_by' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook'></i></a>
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
            </div>
            <p>&copy; Shantel Williams. All rights reserved.</p>
        </footer>
    )
}

export default Footer;