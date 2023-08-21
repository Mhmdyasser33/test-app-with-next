import React from 'react';

const HomePage = () => {
  const pageStyles = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: 'black',
    color: 'white',
  };

  const headingStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyles = {
    fontSize: '18px',
    lineHeight: '1.6',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Welcome to Our Website</h1>
      <p style={paragraphStyles}>
        Explore our offerings and discover the world of innovation and creativity.
      </p>
      <p style={paragraphStyles}>
        We're dedicated to providing top-notch solutions that meet your needs.
      </p>
    </div>
  );
};

export default HomePage;
