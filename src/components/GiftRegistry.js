import React from "react";
import Footer from '../components/Footer';

function GiftRegistry() {
    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-4 flex justify-center text-center">~ Gift Registry ~</h1>
                <p className="text-gray-600 text-2xl mb-8 flex justify-center text-center">
                    Your presense is the best gift we could ask for. However, if you wish to contribute, here are our gift registry links:
                </p>
            </div>
            
            <div className="flex justify-center h-screen items-center p-4 background-image">
                <div className="w-full max-w-lg">
                    <div className="mb-4 p-4">
                        <h2 className="text-xl font-semibold mb-2">Registry 1</h2>
                        <p className="text-gray-600 text-2xl">
                            Find our registry items on <a href="https://target.com" target="_blank" rel="noopener noreferrer" className="underline">Target</a>
                        </p>
                    </div>
                    <hr></hr>
                    <div className="mb-4 p-4">
                        <h2 className="text-xl font-semibold mb-2">Registry 2</h2>
                        <p className="text-gray-600 text-2xl">
                            Explore more options on <a href="https://walmart.com" target="_blank" rel="noopener noreferrer" className="underline">Walmart</a>
                        </p>
                    </div>
                    <hr></hr>
                    <div className="mb-4 p-4">
                        <h2 className="text-xl font-semibold mb-2">Registry 3</h2>
                        <p className="text-gray-600 text-2xl">
                            More options on <a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="underline">Amazon</a>
                        </p>
                    </div>
                    {/* Add more registry sections as needed */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default GiftRegistry;