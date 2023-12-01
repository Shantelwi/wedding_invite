import React, { useState } from "react";
import Footer from '../components/Footer';

function RSVPForm() {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [isBringingPlusOne, setIsBringingPlusOne] = useState(false);
    const [email, setEmail] = useState('');
    const [attending,setAttending] = useState(false);
    const [guestName,setGuestName] = useState('');
    const [submitted,setSubmitted] = useState(false);

    const handleAttendingChange = (e) => {
        const isAttending = e.target.value === 'true';
        setAttending(isAttending);

        setIsBringingPlusOne(isAttending);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/rsvp',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    attending,
                    guestName,
                }),
            });
            
            if(!response.ok){
                throw new Error('HTTP error! Status: ${response.status}');
            }
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitted(true);

            await new Promise(resolve => setTimeout(resolve, 2000));

            window.location.href = '/';
        } catch (error) {
            console.error("Submission error:", error);
        }
    };
    return (
        <div className="p-4 background-image">
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-4 flex justify-center text-center">~ RSVP ~</h1>
                <p className="text-gray-600 text-2xl mb-8 flex justify-center text-center">Hope to see you there!</p>
            </div>

            <div className="flex justify-center items-center h-screen p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-lg ">
                    <div className="mb-4 flex">
                        <div className="mr-2 w-1/2">
                            <label htmlFor="first_name" className="block text-gray-600 font-semibold mb-2">First name :</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline"
                                value={first_name}
                                onChange={(e) => setFirst_name(e.target.value)}
                                required
                            />
                        </div>
                        <div className="ml-2 w-1/2">
                            <label htmlFor="last_name" className="block text-gray-600 font-semibold mb-2">Last Name :</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline"
                                value={last_name}
                                onChange={(e) => setLast_name(e.target.value)}
                                required
                            />
                        </div>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email :</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 flex">
                        <div className="mr-2 w-1/2">
                            <label htmlFor="attending" className="block text-gray-600 font-semibold mb-2"> Will you be attending? :</label>
                            <select
                                id="attending"
                                className="w-full py-2 px-3 border rounded-md leading-tight focus:outline-none focus:shadow-outline"
                                onChange={handleAttendingChange}
                                required
                            >
                                <option value="">
                                    Select an option
                                </option>
                                <option value="true">Yes, I will be there!</option>
                                <option value="false">No, I can't make it.</option>
                            </select>
                        </div>

                        {isBringingPlusOne && (
                            <div className="ml-2 w-1/2">
                                <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="guestName">
                                    Plus One :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="guestName"
                                    type="text"
                                    placeholder="Guest's Name"
                                />
                            </div>
                        )}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">{submitted ? "Submitted" : "Submit RSVP"}</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default RSVPForm;