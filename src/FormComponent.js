// src/FormComponent.js
import React, { useState } from 'react';
import styles from './FormComponent.module.css';

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your email');
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPlaceholder('');
    setIsError(false);

    if (email === '') {
      setPlaceholder('Email is required.');
      setIsError(true);
      return;
    }
    

    if (!validateEmail(email)) {
      setPlaceholder('Please enter a valid email.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('http://3.228.97.110:9000/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email} ),
      });

      if (response.status === 422) {
        setPlaceholder('Invalid email domain. Email cannot end with @ez.works');
        setIsError(true);
      } else if (response.status === 200) {
        setPlaceholder('Form Submitted');
        setEmail(''); 
      } else {
        const errorData = await response.json();
        setPlaceholder(errorData.message || 'Something went wrong.');
        setIsError(true);
      }
    } catch (err) {
      setPlaceholder('Error submitting form. Please try again.');
      setIsError(true);
    }
  };

  return (
    
      <form onSubmit={handleSubmit}>

          
          <input
            type="email"
            value={email}
            placeholder={placeholder}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: isError ? 'red' : 'black' }}
          />
      
        <button type="submit">Submit</button>
      </form>
    
  );
};

export default FormComponent;




