import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/aritra.jpeg" alt="Aritra Dutta" className="nav-profile-img" />
        Portfolio.
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
