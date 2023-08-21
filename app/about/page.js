import React from 'react';

const AboutPage = () => {
  const pageStyles = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: 'black',
  };

  const headingStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyles = {
    fontSize: '16px',
    lineHeight: '1.5',
  };

  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>About Us</h1>
      <p style={paragraphStyles}>
        Welcome to our About page! We are a dedicated team of developers and designers
        passionate about creating amazing web experiences.
      </p>
      <p style={paragraphStyles}>
        Our mission is to build user-friendly and innovative web applications that solve
        real-world problems and exceed our clients' expectations.
      </p>
    </div>
  );
};

export default AboutPage;
