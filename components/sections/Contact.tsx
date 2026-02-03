'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({name:'', email:'', message:''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setForm({...form,[e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    alert('Form submitted successfully!');
    setForm({name:'', email:'', message:''});
    window.scrollTo({top:0, behavior:'smooth'});
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-blue-200 p-8">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">Send Message</button>
      </form>
    </section>
  );
}
