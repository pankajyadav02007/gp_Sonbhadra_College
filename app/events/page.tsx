'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  image: string;
}

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const allEvents: Event[] = [
      {
        id: 1,
        title: 'Annual Tech Fest',
        description: 'Showcase your technical skills in competitions and workshops.',
        date: '2026-03-15',
        image: 'https://content.jdmagicbox.com/v2/comp/sivaganga/q5/9999p4575.4575.170925005103.r1q5/catalogue/vickram-polytechnic-college-arasanur-sivaganga-colleges-bqki6q8ipm.jpg',
      },
      {
        id: 2,
        title: 'Workshop on AI & ML',
        description: 'Hands-on session on Artificial Intelligence and Machine Learning.',
        date: '2026-04-05',
        image: 'https://kpccal.edu.in/Images/img-2.webp',
      },
      {
        id: 3,
        title: 'Cultural Week',
        description: 'Music, dance, drama and fun activities for all students.',
        date: '2025-12-20',
        image: 'https://citspc.edu.in/wp-content/uploads/2023/06/IMG-9.jpg',
      },
      {
        id: 4,
        title: 'Seminar on Robotics',
        description: 'Learn robotics from industry experts.',
        date: '2025-11-10',
        image: 'https://www.kpspolytechnic.in/images/events/Annual-Festival-Day-3.JPG',
      },
    ];

    const today = new Date();
    const upcoming = allEvents.filter(ev => new Date(ev.date) >= today);
    const past = allEvents.filter(ev => new Date(ev.date) < today);

    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, []);

  const renderEventCard = (event: Event) => (
    <div
      key={event.id}
      className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative h-60 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-between h-56">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
          <p className="text-gray-400 text-sm">📅 {event.date}</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">
          Register
        </Button>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen px-4 py-16 max-w-7xl mx-auto">
      {/* Back to Home */}
      <Link
        href="/"
        className="text-blue-600 font-medium hover:underline mb-12 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Upcoming Events */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Upcoming Events
      </h1>
      {upcomingEvents.length === 0 ? (
        <p className="text-center text-gray-500 mb-16">No upcoming events right now.</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-16">
          {upcomingEvents.map(renderEventCard)}
        </div>
      )}

      {/* Past Events */}
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Past Events
      </h1>
      {pastEvents.length === 0 ? (
        <p className="text-center text-gray-500">No past events available.</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {pastEvents.map(renderEventCard)}
        </div>
      )}
    </section>
  );
}
