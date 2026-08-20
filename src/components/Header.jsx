import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="title">Hi, I'm <span className="highlight">Aritra Dutta</span></h1>
          <p className="subtitle">Backend Developer | API & Telemetrics Specialist</p>
          <div className="tech-badges">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>REST APIs</span>
          </div>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
        
        <div className="terminal-container">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="terminal-title">wintegtechnologies.com</span>
          </div>
          <div className="browser-body" style={{ width: '100%', padding: 0, overflow: 'hidden', display: 'flex' }}>
            <a href="https://wintegtechnologies.com/" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
              <img 
                src="/winteg-preview.png" 
                alt="Winteg Technologies Preview"
                style={{ width: '100%', height: 'auto', display: 'block', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
