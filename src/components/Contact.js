import React, { useState } from 'react';
import './Contact.css';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Your message has been submitted!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Container fixed>
      <div className='contact'>
        <div className='contact-header'>
          <h1>Get in Touch📧</h1>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Talk to monkey...'
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
               placeholder='Send mail to monkey...'
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder='Message to monkey...'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <Button variant="contained" type="submit" className='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
