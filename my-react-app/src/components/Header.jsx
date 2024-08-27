import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChannelsClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" /> 
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/Job-Portal">Job-Portal</Link></li> 
          <li>
            <div className="dropdown-container">
              <button className="dropdown-button" onClick={handleChannelsClick}>
                Channels
                <span className="arrow">{showDropdown ? '▲' : '▼'}</span>
              </button>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><Link to="/networking">Networking</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/reunions">Reunions</Link></li>
                </ul>
              )}
            </div>
          </li>
          <li><Link to="/donations">Donations</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/login" className="box-link">Login</Link></li>
          <li><Link to="/signup" className="box-link">Sign Up</Link></li>
        </ul>
        <div className="profile-icon">
          <Link to="/profile">
            <img src="/profile1.png" alt="Profile" /> 
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
