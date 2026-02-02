'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome to GPS On Bhadra Polytechnic College',
      subtitle: 'Shaping Future Engineers with Excellence',
      description:
        'Empowering students with quality technical education and industry-ready skills',
      image: '/images/slide1.jpg',
    },
    {
      title: 'Industry-Ready Technical Education',
      subtitle: 'Learn from Experts, Build Your Career',
      description:
        'State-of-the-art facilities and experienced faculty for your success',
      image: '/images/slide2.jpg',
    },
    {
      title: '100% Placement Assistance',
      subtitle: 'Your Dream Career Starts Here',
      description:
        'Strong industry partnerships and dedicated placement cell',
      image: '/images/slide3.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { icon: GraduationCap, value: '5000+', label: 'Alumni' },
    { icon: Users, value: '1000+', label: 'Students' },
    { icon: Award, value: '95%', label: 'Placement Rate' },
    { icon: BookOpen, value: '15+', label: 'Courses' },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            {slides[currentSlide].subtitle}
          </p>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Apply Now <ArrowRight className="ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-blue-600 border-white hover:bg-white hover:text-blue-600"
            >
              Explore Courses
            </Button>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-8 bg-white'
                    : 'w-3 bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
              >
                <stat.icon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-200 text-sm">
                  {stat.label}
                </div>
              </div>
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
              src="/images/https://th.bing.com/th/id/R.656aa56d6fc9fe4c2e22c22531a5bf82?rik=JNPkJaVZsRRanA&riu=http%3a%2f%2fgpsonbhadra.in%2fpramod+new.jpg&ehk=UIbSGotjXvyty8HNc%2fzLPl36sYJ90pomcfr6v4s3ptk%3d&risl=&pid=ImgRaw&r=0"
              alt="Principal"
              width={320}
              height={320}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Principal Message */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Message from the Principal
            </h2>
            <p className="text-gray-600 mb-4">
              At GPS On Bhadra Polytechnic College, we are committed to
              providing industry-focused technical education and shaping
              confident, skilled engineers for tomorrow.
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
