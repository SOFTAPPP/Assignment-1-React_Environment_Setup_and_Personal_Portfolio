import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-content">
        <h1 className="title">Hi, I'm <span className="highlight">Aritra Dutta</span></h1>
        <p className="subtitle">Backend Developer | API & Telemetrics Specialist</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </header>
  );
};

export default Header;
