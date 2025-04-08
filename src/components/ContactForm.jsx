import "./ContactForm.css"; // Ensure you create a corresponding CSS file for styling
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Implement backend submission here
  };

  return (
    <div className='contactform-container'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='First and Last Name*'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='company'
          placeholder='Company (optional)'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='E-mail*'
          required
          onChange={handleChange}
        />
        <input
          type='tel'
          name='phone'
          placeholder='Phone*'
          required
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder='Message*'
          required
          onChange={handleChange}
        ></textarea>

        <button type='submit' disabled>
          SEND
        </button>
      </form>
    </div>
  );
}
