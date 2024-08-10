import React, { useState } from 'react';
import "./SignUp.css"; // Import your CSS file
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="signup-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="mobile" 
          placeholder="Mobile" 
          value={formData.mobile} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="city" 
          placeholder="City" 
          value={formData.city} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm Password" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          required 
        />
        <label className="privacy-policy">
          <input 
            type="checkbox" 
            name="agree" 
            checked={formData.agree} 
            onChange={handleChange} 
            required 
          />
          I have read and agree to the <a href="/privacy-policy">Privacy Policy</a>
        </label>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <p>Already have an account? <Link to="/login">Login!</Link></p>
    </div>
  );
}

export default Signup;
