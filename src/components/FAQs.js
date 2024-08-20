import React, { useState } from "react";
import Footer from './Footer';

function FAQ() {
    const [activeIndex, setActiveIndex]  = useState(null);

    const faqs = [
        {
            question: "When is the wedding?",
            answer: "The Wedding is May 9th, 2026."
        },

        {
            question: "What time is the wedding?",
            answer: "Wedding start time is 6pm."
        },

        {
            question: "What is the dress attire for the ceremony?",
            answer: " Dress attire is black tie or formal."
        },

        {
            question: "Is this a family friendly resort",
            answer: "Yes it is."
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={{ maxWidth: '900px', margin: '20px auto', padding: '25px', border: '1px solid #ccc', borderRadius: '5px'}}>
            <h1 style={{fontSize: "30px" , textAlign: "center"}}> Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: '15px', fontSize: '20px' }}>
                    <h3 onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer', color: '#007bff' }}>
                        {faq.question}
                    </h3>
                    {activeIndex === index &&
                    <p style={{ padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
                        {faq.answer}
                    </p>  }
                </div>
            ))}
<Footer/>
        </div>
    )
    
}
export default FAQ;