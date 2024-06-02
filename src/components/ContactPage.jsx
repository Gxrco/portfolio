import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="content-c">
      <div className="contact-page">
        <h1>Get in touch with me</h1>
        <p>Feel free to reach out to me for any queries, suggestions, or just to say hi!</p>
        <div className="app__contact">
          <a href="https://twitter.com/GxrcoOnline" className="contact__info"> {/* Update this line */}
            <img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="twitter" /> {/* Update this line */}
            <p>Twitter</p> {/* Update this line */}
          </a>
          <a href="https://www.linkedin.com/in/gxrco/" className="contact__info">
            <img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="linkedin" /> 
            <p>LinkedIn</p>
          </a>
          <a href="https://github.com/Gxrco" className="contact__info">
            <img src="https://img.icons8.com/ios/50/000000/github.png" alt="github" /> 
            <p>GitHub</p>
          </a>
          <a href="mailto:ram22281@uvg.egu.gt" className="contact__info">
            <img src="https://img.icons8.com/ios/50/000000/email.png" alt="email" /> 
            <p>Email</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;