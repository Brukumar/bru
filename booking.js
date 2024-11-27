import React, { useState } from 'react';

function Booking() {
  const [form, setForm] = useState({ name: '', date: '', car: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name}`);
  };

  return (
    <div className="booking">
      <h1>Book a Car</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />
        <select name="car" onChange={handleChange}>
          <option value="Toyota Corolla">Toyota Corolla</option>
          <option value="Honda Civic">Honda Civic</option>
          <option value="Tesla Model 3">Tesla Model 3</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;
