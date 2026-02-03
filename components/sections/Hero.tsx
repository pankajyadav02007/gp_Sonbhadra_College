'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: 'Welcome to GPS On Bhadra Polytechnic College',
      subtitle: 'Shaping Future Engineers with Excellence',
      description:
        'Empowering students with quality technical education and industry-ready skills',
      image: 'https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_960_720.jpg',
    },
    {
      title: 'Industry-Ready Technical Education',
      subtitle: 'Learn from Experts, Build Your Career',
      description:
        'State-of-the-art facilities and experienced faculty for your success',
      image: 'https://www.bennett.edu.in/wp-content/uploads/2024/12/Navigating-Campus-Resources-at-Bennett-University-A-Step-by-Step-Guide.jpg',
    },
    {
      title: '100% Placement Assistance',
      subtitle: 'Your Dream Career Starts Here',
      description: 'Strong industry partnerships and dedicated placement cell',
      image: 'https://www.makehappen.org/wp-content/uploads/2020/04/600-campus-75731374.jpg',
    },
  ];

  const stats = [
    { icon: GraduationCap, value: 5000, label: 'Alumni' },
    { icon: Users, value: 1000, label: 'Students' },
    { icon: Award, value: 95, label: 'Placement Rate (%)' },
    { icon: BookOpen, value: 15, label: 'Courses' },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStatsInView(true);
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt="Hero Background"
            fill
            priority
            className="object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {slides[currentSlide].description}
          </p>

          {/* Slider Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index ? 'w-8 bg-white' : 'w-3 bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Stats Cards */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16"
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                inView={statsInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRINCIPAL SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Principal Image */}
          <div className="flex justify-center">
            <Image
              src="https://urise.up.gov.in/resources/profile_image/su/AD202000017935_Principal1.jpeg"
              alt="Principal"
              width={320}
              height={320}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Principal Message */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Message from the Principal</h2>
            <p className="text-gray-600 mb-4">
              At GPS On Bhadra Polytechnic College, we are committed to providing industry-focused technical education and shaping confident, skilled engineers for tomorrow.
            </p>
            <p className="font-semibold text-gray-800">
              — Dr. ABC XYZ <br />
              Principal
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ================= STAT CARD COMPONENT =================
interface StatCardProps {
  icon: any;
  label: string;
  value: number;
  inView: boolean;
}

function StatCard({ icon: Icon, label, value, inView }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [inView, value]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 transform transition hover:scale-105 hover:bg-white/20">
      <Icon className="w-10 h-10 text-white mx-auto mb-3" />
      <div className="text-3xl font-bold text-white">{count}{label.includes('%') ? '%' : '+'}</div>
      <div className="text-gray-200 text-sm">{label}</div>
    </div>
  );
}
