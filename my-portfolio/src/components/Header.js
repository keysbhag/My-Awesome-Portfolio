import React from 'react';
import '../styles/Header.css'

const styles = {
  headingStyle: {
    fontSize: '50px',
    color: 'white'
  },
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <div className="skyline d-flex align-items-center justify-content-center">
      <h1 style={styles.headingStyle}>This is <span className='custom-logo'>Key</span>shawn's Portfolio</h1>
    </div>
  );
}

export default Header;
