import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to me for any collaborations, opportunities, or just to say hi!</p>
          <ul>
            <li><strong>Email:</strong> contact@wintegtechnologies.com</li>
            <li><strong>Website:</strong> wintegtechnologies.com</li>
            <li><strong>Location:</strong> India</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
