'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ApplyPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    gender: '',
    address: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application Submitted Successfully ✅');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            College Admission Form
          </h1>
          <p className="text-gray-600 mt-2">
            Fill the form carefully to apply for admission
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Phone & Course */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="input"
            >
              <option value="">Select Course</option>
              <option>Computer Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
              <option>Electrical Engineering</option>
            </select>
          </div>

          {/* Gender */}
          <div className="flex gap-6 flex-wrap">
            {['Male', 'Female', 'Other'].map((g) => (
              <label key={g} className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  onChange={handleChange}
                  required
                />
                {g}
              </label>
            ))}
          </div>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Full Address"
            rows={3}
            required
            value={formData.address}
            onChange={handleChange}
            className="input resize-none"
          />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-xl shadow-lg"
          >
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
