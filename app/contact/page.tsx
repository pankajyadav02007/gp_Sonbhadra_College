"use client";

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
    router.push("/");
  }

  function handleFeedbackSubmit() {
    if (feedback.trim() === "") return;
    setFeedbackList([feedback, ...feedbackList]);
    setFeedback("");
  }

  return (
    <div className="space-y-10">
      {/* TOP SECTION : IMAGE + FORM */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT IMAGE (SMALLER) */}
        <div className="h-full w-full p-5">
          <img
            src="https://media.istockphoto.com/id/1594331649/photo/a-call-center-worker-sitting-at-a-laptop-in-the-office.jpg?s=612x612&w=0&k=20&c=kRUWGDv7AA4EXM7ZtZ8w97RYKdGHKKIYlwd_0lsXg7s="
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-orange-500 font-semibold text-lg mb-1">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-6">
            We would love to hear from you
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="border rounded p-3 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="border rounded p-3 w-full"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border rounded p-3 w-full"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="border rounded p-3 w-full"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              onChange={handleChange}
              className="border rounded p-3 w-full"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM SECTION : FEEDBACK + MAP */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* FEEDBACK */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3 text-orange-500">
            Feedback
          </h3>

          <textarea
            placeholder="Write your feedback here..."
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border rounded p-3 w-full"
          ></textarea>

          <button
            onClick={handleFeedbackSubmit}
            className="mt-3 bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
          >
            Submit Feedback
          </button>

          {/* SHOW FEEDBACK LIST */}
          <div className="mt-5 space-y-2 max-h-40 overflow-y-auto">
            {feedbackList.length === 0 && (
              <p className="text-sm text-gray-400">No feedback yet.</p>
            )}
            {feedbackList.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-2 rounded text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* MAP */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Delhi,India&output=embed"
            className="w-full h-[250px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
