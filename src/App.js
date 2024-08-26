import React, { useState } from 'react';
import './styles.css';
import { validateForm } from './utils/formValidation';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      alert('Booking confirmed!');
      setFormData({
        name: '',
        date: '',
        time: '',
        guests: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container">
      <h1>Book a Table at Little Lemon</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}
        
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <p className="error">{errors.time}</p>}
        
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
        {errors.guests && <p className="error">{errors.guests}</p>}
        
        <button type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default App;