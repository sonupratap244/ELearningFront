    
//import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaTelegram, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="hero">
                <h1>Get in Touch with Us</h1>
                <p>We would love to hear from you. Whether you have a question or need support, feel free to reach out.</p>
            </div>

            {/* Contact Information Section */}
            <section className="contact-info">
                <h2>Our Contact Methods</h2>
                <p>Reach out through any of the platforms below:</p>
                <div className="contact-icons">
                    <a href="https://wa.me/919720976062" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
                        <FaWhatsapp /> WhatsApp
                    </a>
                    <a href="https://telegram.me/vinayakstudyzone97" target="_blank" rel="noopener noreferrer" className="icon telegram">
                        <FaTelegram /> Telegram
                    </a>
                    <a href="http://www.instagram.co/vinayakstudyzone" target="_blank" rel="noopener noreferrer" className="icon instagram">
                        <FaInstagram /> Instagram
                    </a>
                    <a href="https://www.facebook.com/vinayakstudyzone" target="_blank" rel="noopener noreferrer" className="icon facebook">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="mailto:vinayrajput2110@gmail.com" className="icon email">
                        <FaEnvelope /> Email
                    </a>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="map-container">
                <iframe
                        title="Google Map"
                       src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3571.2425422897145!2d80.28286227542455!3d26.480134476907782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI4JzQ4LjUiTiA4MMKwMTcnMDcuNiJF!5e0!3m2!1sen!2sin!4v1729403355244!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Contact;
