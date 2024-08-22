import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RsvpList = () => {
    const [rsvps, setRsvps] = useState([]);

    useEffect(() => {
        const fetchRsvps = async () => {
            try {
                const response = await axios.get('/api/rsvps', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setRsvps(response.data);
            } catch (error){
                console.error('Error fetching RSVPs:', error)
            }
        };

        fetchRsvps();
    }, []);

    return (
        <div>
            <h1>RSVP List</h1>
            <ul>
                {rsvps.map((rsvp) => (
                    <li key={rsvp.email}>
                        {rsvp.firstName} {rsvp.lastName} - Guest Names: {rsvp.plusOne} - 
                        Attending: {rsvp.attending ? 'Yes' : 'No'} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RsvpList;