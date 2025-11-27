import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "31057863-01f5-47b6-be7d-72d4487c4f5c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        event.target.reset(); // clear form
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-section">
        {/* Left side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to reach out to me
            about anything you'd like me to work on. You can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail icon" />
              <p>agermidenga@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call icon" />
              <p>+254 759952973</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location icon" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit now"}
          </button>

          {/* Feedback message */}
          {status && (
            <p className={`form-status ${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;