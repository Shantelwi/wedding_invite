import React from "react";
import Footer from '../components/Footer';

function Location() {
    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-4 flex justify-center text-center">~ Venue ~</h1>
                <div className="flex justify-center text-center">
                    <div className="w-1/2 p-4">
                        <p className="text-gray-600 text-2xl mb-2">
                            Where : 600 E 5th St, Long Beach, CA 90802
                        </p>
                    </div>
                    <div className="w-1/2 p-4">
                        <p className="text-gray-600 text-2xl mb-2">
                            When : June 5th, 2024 at 6:00pm
                        </p>
                    </div>
                </div>
                <p className="text-gray-600 text-2xl flex justify-center text-center p-4 mb-2">
                            Attire : Black tie (optional)
                </p>
            </div>
            
            <div className="bg-primary-100 min-w-screen flex justify-center p-4">
                <div className="max-w-lg p-8 bg-white shadow-lg rounded-md">
                    {/* Replace the following iframe with own google maps embeded code */}
                    <iframe
                        title="Venue Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5350843608117!2d-118.18729705923653!3d33.77267787337484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd313fb031954f%3A0x532f51d7fc94362b!2s600%20E%205th%20St%2C%20Long%20Beach%2C%20CA%2090802!5e0!3m2!1sen!2sus!4v1700513728608!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Location;