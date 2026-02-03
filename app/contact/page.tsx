'use client';

import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <ContactForm />
        <div className="mt-10 text-center">
          <Link href="/" className="text-blue-600 underline hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
