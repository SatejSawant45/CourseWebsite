import React, { useState } from 'react';
import { X } from 'lucide-react';

const RegisterForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contact: '',
    transactionId: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Enter a valid 10-digit number';
    }
    if (!formData.transactionId.trim()) newErrors.transactionId = 'Transaction ID is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      console.log("Form data being sent:", formData);

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Registration successful!');
          onClose();
        } else {
          alert('Failed to register. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-white mb-4">Registration Form</h2>

        {/* QR Code Section */}
        <div className="mb-6">
          <div className="bg-white p-3 rounded-lg flex items-center justify-center mb-2">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=example@upi&pn=TradePro&am=999"
              alt="Payment QR Code"
              className="w-24 h-24"
            />
          </div>
          <p className="text-gray-300 text-xs text-center">Scan QR code to pay ₹999</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full bg-gray-800 text-white rounded px-3 py-1.5 ${
              errors.firstName ? 'border border-red-500' : ''
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}

          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white rounded px-3 py-1.5"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full bg-gray-800 text-white rounded px-3 py-1.5 ${
              errors.lastName ? 'border border-red-500' : ''
            }`}
          />
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-gray-800 text-white rounded px-3 py-1.5 ${
              errors.email ? 'border border-red-500' : ''
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number *"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full bg-gray-800 text-white rounded px-3 py-1.5 ${
              errors.contact ? 'border border-red-500' : ''
            }`}
          />
          {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}

          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID *"
            value={formData.transactionId}
            onChange={handleChange}
            className={`w-full bg-gray-800 text-white rounded px-3 py-1.5 ${
              errors.transactionId ? 'border border-red-500' : ''
            }`}
          />
          {errors.transactionId && <p className="text-red-500 text-xs">{errors.transactionId}</p>}

          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
