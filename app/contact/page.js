import React from 'react';
import Todo from '../components/Todo';

const ContactPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>
        Welcome to the Contact Page
      </h1>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>
        Feel free to reach out to us using the contact information below.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          padding: '20px',
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Contact Info</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div style={{ flex: 1 }}>
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;